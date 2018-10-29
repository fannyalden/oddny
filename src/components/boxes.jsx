import React, { Component } from "react";
import Box from "./box.jsx";
import "../css/grid.css";

class Boxes extends Component {
  state = {
    boxes: [{ id: 1, value: 1, text: "Click a button to add or delete a box." }]
  };

  handleIncrement = (box, newBox) => {
    const boxes = [...this.state.boxes]; //cloning array in state object
    boxes.splice(box.id + 1, 0, newBox); //insert new box
    boxes[boxes.indexOf(box)].value++;
    boxes.map(b => {
      b.id = boxes.indexOf(b);
    });
    this.setState({ boxes });
  };

  handleDelete = boxId => {
    const boxes = this.state.boxes.filter(b => b.id !== boxId);
    this.setState({ boxes });
  };

  render() {
    console.log(this.state.boxes);
    return (
      <div className="grid">
        {this.state.boxes.map(box => (
          <Box
            onAdd={this.handleIncrement}
            onDelete={this.handleDelete}
            key={box.id}
            box={box} //id, value
          />
        ))}
      </div>
    );
  }
}

export default Boxes;
