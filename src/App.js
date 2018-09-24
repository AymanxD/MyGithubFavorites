import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Favorites from './Favorites';

class App extends Component {


// Layers out foundations of application.
// The search component is where the majority of the functionality is.

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
          <body>
            <Search/>
          </body>
      </div>
    );
  }
}

export default App;
