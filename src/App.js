//@flow
import React, { Component } from 'react';
import Board from './components/Board';
import logo from './logo.svg';

class App extends Component<*> {
  render() {
    return (
      <div className="App">
        <Board cellMatrix={[[0]]} />
      </div>
    );
  }
}

export default App;
