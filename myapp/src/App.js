import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = 
    {
      name: "Okorie GoodGod",
      skill: "React"
    }

    this.handleChange = (e) => {
      this.setState({
        name: e.target.value
      });
    }

  }


  render() {
    return (
      <div className="App">
        <h1> Hello World, my name is {this.state.name}  </h1>
        <form>
          <input type="text" placeholder="Enter your cute name" onChange={this.handleChange} />
          <button> Submit </button>
        </form>
      </div>
    )
  }  
}

export default App;

