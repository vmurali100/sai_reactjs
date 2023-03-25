import React, { Component } from "react";
export default class User_Json extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isEdit: false,
      user: {
        fname: "",
        lname: ""
      },
      users: [],
    };
    // 1. Mounting Phase
    // 2. Updating Phase
    // 3. Un mountning Phase

    // console.log("I am from constructor .. And I will be Triggered First !!!");
  }



  // static getDerivedStateFromProps() {
  //   // console.log(
  //   //   "I am from getDerivedStateFromProps . I will be Triggering Second !!"
  //   // );
  //   return null;
  // }

  render() {
    const addUser = (e) => {
      //console.log(e.target)
      const newUser = { ...this.state.user }
      //console.log(newUser.fname)
      newUser[e.target.name] = e.target.value
      this.setState({ user: newUser })
    }
    const addUsers = () => {
      if (this.state.isEdit) {
        updateUser();
      }
      else {
        this.setState({
          users: [...this.state.users, this.state.user],
          user: {
            fname: "",
            lname: ""
          }
        })
      }
    }

    const updateUser = () => {
      const updatedUsers = [...this.state.users];
      updatedUsers[this.state.index] = this.state.user;
      this.setState({
        index: null,
        isEdit: false,
        user: { fname: "", lname: "" },
        users: updatedUsers
      });
    }

    const editUser = (i) => {
      const usr = this.state.users[i];
      this.setState({ index: i, isEdit: true, user: usr })
    }

    const deleteUser = (i) => {
      const filteredUsers = this.state.users.filter((usr) => this.state.users[i] !== usr);
      this.setState({ users: filteredUsers })
    }

    return (
      <div>
        <h2>Welcome to User Component !!</h2>
        <form>
          <label htmlFor="fname"> First name</label>
          <input type="text" value={this.state.user.fname} name="fname" onChange={(e) => { addUser(e) }}></input><br />
          <label htmlFor="lname"> Last name</label>
          <input type="text" value={this.state.user.lname} name="lname" onChange={(e) => { addUser(e) }}></input><br />
          {this.state.isEdit ? <button type="button" onClick={addUsers}>Update User</button> : <button type="button" onClick={addUsers}>Add User</button>}
        </form>


        <table border={1}>
          <thead>
            <tr>
              <th> First Name </th>
              <th> Last Name </th>
              <th> Update </th>
            </tr>
          </thead>
          {this.state.users.map((usr, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>
                    <button onClick={() => { editUser(i) }}>Edit</button>
                    <button onClick={() => { deleteUser(i) }}>Delete</button>
                  </td>
                </tr>
              </tbody>)
          })}
        </table>

      </div>
    );
  }

  componentDidMount() {

    // console.log("I am from componentDidMount Method . I will be triggered after Render Method !!")
  }
}
