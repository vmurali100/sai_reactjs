import React, { Component } from "react";

export default class Child extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Sai Component !!",
      person: {
        email: "sai@gmail.com",
        username: "sai123",
      },
      users: ["Ram", "Ravi", "Sam"],
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to Child Component !!</h2>
        <button onClick={()=>{this.props.parentEvent(this.state.person)}}>Send Data To Parent !!</button>
      </div>
    );
  }
}
