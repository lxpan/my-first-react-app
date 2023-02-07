import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component {
  // 1.
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // 3.
  componentDidMount() {
    // add additional class field independent of "this.props" or "this.state"
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // 5. Called if Clock is ever removed from DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // 4. On Repeat
  tick() {
    // when state changes, React knows to call render() again
    this.setState({
      date: new Date()
    });
  }

  // 2. 
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
