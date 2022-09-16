import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = 
    {
      name: "Okorie GoodGod Kalu",
      skill: "React"
    }
  }


  render() {
    return (
      <div className="App">
        <h1> Hello World, my name is {this.state.name}  </h1>
      </div>
    );
  }  
}

export default App;

