import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    console.log('Constructor');
    super(props)

    this.state = {
      counter: 0
    }

    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter -1})
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('---------------------');
  }

  render () {
    console.log('Render');

    return (
    <>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      <div className="counter">
        Counter: {this.state.counter}
      </div>
    </>
    );
  }
}
