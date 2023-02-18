import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        console.log('Constructor');
        super(props);

        this.state = {
            counter: 0,
        };

        this.increment = () => this.setState({ counter: this.state.counter + 1 });
        this.decrement = () => this.setState({ counter: this.state.counter - 1 });
    }

    componentDidMount() {
        console.log('Component Did Mount');
        console.log('-------------------');
    }

    // this is used to stop a re-render in certain situations when a state/prop change doesn't need to update UI
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should Component Update - DO NOT RENDER');
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

    render() {
        console.log('Render');

        return (
            <>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <div className="counter">Counter: {this.state.counter}</div>
            </>
        );
    }
}
