import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("I am from Constructor !!");
  }
  static getDerivedStateFromProps() {
    console.log("I am from getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate() {
    console.log("I am from shouldComponentUpdate !!");
    return false;
  }
  render() {
    console.log("I am from Render in Child ..!!");
    return (
      <div>
        <h2>{this.props.count}</h2>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("I am from componentDidMount !!");
  }
}
