import React, { Component } from "react";
import "./css/App.css";
import Boxes from "./components/boxes.jsx";

class App extends Component {
  render() {
    return (
      <div className="container1">
        <div className="container2">
          <Boxes />
        </div>
      </div>
    );
  }
}

export default App;
