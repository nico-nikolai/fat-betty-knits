import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Dashboard />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
