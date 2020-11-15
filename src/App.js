
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
