import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="RocketBook" />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
