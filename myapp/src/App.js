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

    this.handleSubmit = (e) => {
      e.preventDefault()
      console.log('This form was submitted by', this.state.name)
    }

    this.handleClick = (e) => {
      console.log('Button was clicked')
    }

    this.handleMouseOver = (e) => {
      console.log('Button was hovered on')
    }

    this.handleCopy = (e) => {
      console.log('Stop stealing my precious content')
    }

  }


  render() {
    return (
      <div className="App">
        <h1> Hello World, my name is {this.state.name}  </h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your name" onChange={this.handleChange} />
          <button> Submit </button>
        </form>  
        <br></br>
        <h1> MY REACT APP</h1>
        <button onClick={this.handleClick}> Click Me </button>
        <button onMouseOver={this.handleMouseOver}> Hover Over Me </button>
        <p onCopy={this.handleCopy}> Disclaimer! "Do not try to copy this content"! </p>
      </div>
    )
  }  
}

export default App;

