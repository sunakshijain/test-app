import React, { Component } from 'react';
import logo from './images/tpg-logo.png';
import './css/App.css';
import { CommentContainer } from './containers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Post Comments</h1>
        </header>
        <div className="container m-5">
        <CommentContainer/>
        </div>
      </div>
    );
  }
}

export default App;
