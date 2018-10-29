import React, { Component } from "react";

class Box extends Component {
  randomText() {
    let length = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    let str = "";
    for (
      ;
      str.length < length;
      str += Math.random()
        .toString(36)
        .substring(2)
    );
    return str.substring(0, length);
  }
  render() {
    return (
      <div className="box">
        <header>{this.props.box.value}</header>
        <p>{this.props.box.text}</p>
        <div className="editButton">
          <button
            onClick={() => {
              const newBox = { id: null, value: 1, text: this.randomText() };
              this.props.onAdd(this.props.box, newBox);
            }}
            className="add"
          >
            Add
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.box.id)}
            className="delete"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
