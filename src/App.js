import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
class App extends Component {
  state = [
    {name : "Person1" },
    {name : "Person2"}
  ]
  switchNameHandler =  (newArg) =>
  {
    this.setState  ([

      {name :newArg },
      {name : "Person2Change"}
    ]
    );
  }
  render() {
    return (
      <div className="App">
       <Header />
       <Main />
      
      {/* <Person name={this.state[0].name}/>
      <Person name={this.state[1].name}  click = {this.switchNameHandler.bind(this , "Argument")}> My Component </Person> */}
      </div>
      //React.createElement('div', {className : "App"}, React.createElement('h1', null , "Working"))
    );
    
  }
}

export default App;
