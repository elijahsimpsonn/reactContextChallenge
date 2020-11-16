import React, { Component } from "react";

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    name: "Obi Wan Kenobi",
    age: 57,
    role: "Jedi Master",
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          increaseAge: () => this.setState({ age: this.state.age + 1 }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Group = (props) => (
  <div className="group">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <ul className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <li>
                {context.state.name} - {context.state.age} - {context.state.role}
              </li>
              <button onClick={context.increaseAge}>Increase Age</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </ul>
    );
  }
}

export default class Answer extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Group />
        </div>
      </MyProvider>
    );
  }
}
