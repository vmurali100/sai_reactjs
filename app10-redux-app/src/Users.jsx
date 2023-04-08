import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from "./actions";

class Users extends Component {
  state = {
    user: {
      fname: "",
      lname: "",
      email: "",
    },
    isEdit: false,
  };
  hanldeChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  clearForm = () => {
    this.setState({
      user: {
        fname: "",
        lname: "",
        email: "",
      },
    });
  };

  render() {
    console.log(this.props.allUsers);
    return (
      <div>
        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => {
              this.hanldeChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="fname">Last Name : </label>
          <input
            type="text"
            name="lname"
            value={this.state.user.lname}
            onChange={(e) => {
              this.hanldeChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="fname">Email : </label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={(e) => {
              this.hanldeChange(e);
            }}
          />{" "}
          <br />
        </form>
       

        {this.state.isEdit ? <button
          onClick={() => {
            this.props.updateUser(this.state.user);
            this.clearForm();
            this.setState({isEdit:false})
          }}
        >
          Update User
        </button> : <button
          onClick={() => {
            this.props.addUser(this.state.user);
            this.clearForm();
          }}
        >
          AddUser
        </button>}
        {/* <ul>
          {this.props.allUsers.map((usr, i) => (
            <li
              key={i}
              onClick={() => {
                this.props.deleteUser(usr);
              }}
            >
              {usr.fname}
            </li>
          ))}
        </ul> */}
        <table border={1}>
          <thead>
            <tr>
              <th>First NAME</th>
              <th>Last NAME</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allUsers.map((usr) => (
              <tr>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.email}</td>
                <td>
                  <button
                    onClick={() => {
                      this.setState({user:usr,isEdit:true});
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.props.deleteUser(usr);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    allUsers: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (usr) => dispatch(addUserAction(usr)),
    deleteUser: (usr) => dispatch(deleteUserAction(usr)),
    updateUser:(usr)=>dispatch(updateUserAction(usr))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
