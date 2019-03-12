import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {inject,observer} from 'mobx-react';

@inject((stores) => ({
  a: console.log(stores.a) && stores.a,
  b: stores.b
}))
@observer
class App extends Component {

  constructor(props){
    super();
  }

  render() {
    console.log(this.props);
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>

              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >

              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
