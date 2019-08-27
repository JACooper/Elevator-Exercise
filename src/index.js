import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import ElevatorWrapper from './ElevatorWrapper'

class App extends React.Component {
  render() {
    return <ElevatorWrapper />;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);