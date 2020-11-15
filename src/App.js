// REACT CONTEXT CHALLENGE
// 1 - The code right now shows a simple React app that displays value with in a state. It is being passed down through multiple componets,
// which is resulting in prop drilling. Your task is to refactor this app using Context.

//2 - The result at the end should render the name,age,and role that is within the context. You can display this as either list items or paragraphs.

//3 - BONUS CHALLENGE - Create a button that when pressed increses the age value by 1.

//HINTS - Remeber that we need to create a React.createContext() and use .Provider to provide the date from the context and .Consumer to use the data from it

// If you get stuck, the Answer.js file provides not only the answer but a link to a YouTube video to explain what everything does.

import React, { Component } from "react";
import "./App.css";

const Group = (props) => (
  <div className="group">
    <Person name={props.name} age={props.age} role={props.role} />
  </div>
);
class Person extends Component {
  render() {
    return (
      <ul className="person">
        <li>
          {this.props.name} - {this.props.age} - {this.props.role}
        </li>
      </ul>
    );
  }
}

export default class App extends Component {
  state = {
    name: "Obi Wan Kenobi",
    age: 57,
    role: "Jedi Master",
  };

  render() {
    return (
      <div>
        <Group
          name={this.state.name}
          age={this.state.age}
          role={this.state.role}
        />
      </div>
    );
  }
}
