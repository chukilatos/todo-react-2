import React, { Component } from "react";

class ButtonClass extends Component {
  render() {
    const { text } = this.props;
    return <button style={{ color: "green" }}>{text}</button>;
  }
}

export default ButtonClass;
