import React, { Component } from "react";

export default class PersonEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      helloWorld: "",
    };
    // this.handleShowMessage = this.handleShowMessage.bind(this)
  }

  handleShowMessage = () => {
    this.setState({
      helloWorld: "Welome to Events & Events Handlers Topic !!!!",
    });
  };
  //   handleShowMessage() {
  //     this.setState({helloWorld:"Welome to Events & Events Handlers Topic !!!!"})
  //   }

  render() {
    return (
      <div>
        <button onClick={this.handleShowMessage}>Show Message</button>
        <h2>Default Message : {this.state.helloWorld}</h2>
      </div>
    );
  }
}
