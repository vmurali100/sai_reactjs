import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(props);
  }

  render() {
    const { email, username } = this.props.personDetails;
    const { msg } = this.props;
    return (
      <div>
        <h2>{msg}</h2>
        <ul>
          <li>{email}</li>
          <li>{username}</li>
        </ul>
      </div>
    );
  }
}
