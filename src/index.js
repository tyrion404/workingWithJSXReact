import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    const btnText = { text: 'Submit' };
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ padding: '50px' }}>
          <lable className="lable" htmlFor="name">
            Enter Name &nbsp;
          </lable>
          <input id="name" type="text" />
          <br />
          <br />
          <button style={{ backgroundColor: '#000000', color: 'white', borderRadius: '3px', padding: '5px 10px' }}>
            {btnText.text}
          </button>
        </div>
      </div>
    );
    // example shows differences between JSX and HTML.
    // this is for test purpose of deployment.
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);