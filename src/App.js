import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Junior',
        age: 32,
      },
      {
        name: 'Rebeca',
        age: 26,
      },
      {
        name: 'Jeremiah',
        age: 4,
      },
      {
        name: 'Zara',
        age: 3,
      },
      {
        name: 'Gideon',
        age: 1,
      },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log(this);
    this.setState({
      persons: [
        {
          name: newName,
          age: 31,
        },
        {
          name: 'Becky',
          age: 26,
        },
        {
          name: 'Puppy',
          age: 4,
        },
        {
          name: 'Zara',
          age: 2,
        },
        {
          name: 'Gideon',
          age: 1,
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really Working!</p>
        <button onClick={this.switchNameHandler.bind(this, 'Juan')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
          click={this.switchNameHandler.bind(this, 'Juanito')}
        >
          My Hobbies: Dancing
        </Person>
        <Person
          name={this.state.persons[4].name}
          age={this.state.persons[4].age}
        />
      </div>
    );
  }
}
console.log(this);
export default App;
