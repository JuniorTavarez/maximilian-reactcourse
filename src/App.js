import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really Working!</p>
        <Person name="Junior" age="32" />
        <Person name="Rebeca" age="26" />
        <Person name="Jeremiah" age="4" />
        <Person name="Zara" age="3">
          My Hobbies: Dancing
        </Person>
        <Person name="Gideon" age="1" />
      </div>
    );
  }
}

export default App;
