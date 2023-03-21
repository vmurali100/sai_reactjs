import { Component } from "react";
import Person from "./Person";

export class SaiClass extends Component {
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
  //   state = {
  //     fname: "Welcome to Sai Component !!",
  //     person: {
  //       email: "sai@gmail.com",
  //       username: "sai123",
  //     },
  //     users: ["Ram", "Ravi", "Sam"],
  //   };
  render() {
    const { email, username } = this.state.person;

    return (
      <div>
        {/* <Person {...this.state}/> */}
        <Person msg={this.state.message} personDetails={this.state.person} />
        {/* <h2>Hello From Sai Class Component !!!</h2>
        <p>{this.state.fname}</p>
        <ul>
          <li>{email}</li>
          <li>{username}</li>
        </ul>
        <hr />
        <ul>
          {this.state.users.map((val, i) => (
            <li key={i}>{val}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
