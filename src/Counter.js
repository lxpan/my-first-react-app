import React from 'react';

const ErrorComponent = () => <div>{props.ignore}</div>;

/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);

        this.state = {
            counter: 0,
            seed: 0,
            initialising: true,
        };

        this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });
    }

    // Purpose: copy over selected props over to state
    static getDerivedStateFromProps(props, state) {
        // static method also means no access to 'this'
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                // prop seed copied over to counter
                counter: props.seed,
            };
        }
        // anything returned here gets assigned to state
        return null;
    }

    // Good for showing loading "spinners" while loading content
    componentDidMount() {
        console.log('Component Did Mount');
        setTimeout(() => {
            this.setState({ initialising: false });
        }, 500);
        console.log('-------------------');
    }

    // this is used to stop a re-render in certain situations when a state/prop
    // change doesn't need to update UI
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should Component Update - DO NOT RENDER');
            console.log('----------------------');
            return false;
        }
        console.log('Sould Component Update - RENDER');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update');
    }

    componentWillUnmount() {
        console.log('Component Will Unmount');
        console.log('---------------------');
    }

    // Capture props not stored in state, before re-rendering that component
    // Use case: load positions of list views or text areas
    // which can be passed to componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get Snapshot Before Update');
        // the return here gets passed to componentDidUpdate via the param "snapshot"
        return null;
    }

    // allow handling of errors so that the page can still load
    componentDidCatch(error, info) {
        console.log('Component Did Catch');
        this.setState({ error, info });
    }

    render() {
        console.log('Render');

        if (this.state.initialising) {
            return <div>Initialising...</div>;
        }

        if (this.props.showErrorComponent && this.state.error) {
            return <div>We have encountered an error! {this.state.error.message}</div>;
        }

        return (
            <>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">Counter: {this.state.counter}</div>
                {this.props.showErrorComponent ? <ErrorComponent /> : null}
            </>
        );
    }
}
