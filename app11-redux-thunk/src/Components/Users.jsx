import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createUserAsycAction,
  deleteUserAsyncAction,
  getAllUsersAsyncAction,
  updateUserAsycAction,
} from "../redux/actions";

class Users extends Component {
  state = {
    user: {},
    isEdit: false,
  };
  handleDelete = (usr) => {
    this.props.deleteUser(usr);
  };
  handleEdit = (usr) => {
    this.setState({ user: usr, isEdit: true });
  };
  handleChange = (e) => {
    let newuser = { ...this.state.user };
    newuser[e.target.name] = e.target.value;
    this.setState({ user: newuser });
  };
  handleUpdate = () => {
    this.props.updateUser(this.state.user);
    this.clearForm();
  };
  handleCreate = () => {
    this.props.createUser(this.state.user);
    this.clearForm();
  };
  clearForm = () => {
    this.setState({
      user: {
        name: "",
        email: "",
        language: "",
      },
      isEdit: false,
    });
  };
  render() {
    console.log(this.props.allUsers);
    const { name, email, language } = this.state.user;
    return (
      <div>
        <form>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="name">Email : </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="name">Languge : </label>
          <input
            type="text"
            name="language"
            value={language}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          {this.state.isEdit ? (
            <button onClick={this.handleUpdate} type="button">
              Update User
            </button>
          ) : (
            <button onClick={this.handleCreate} type="button">
              Create User
            </button>
          )}
        </form>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Language</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.allUsers.map((usr) => (
              <tr>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>{usr.language}</td>
                <td>
                  <button
                    onClick={() => {
                      this.handleEdit(usr);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(usr);
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
  componentDidMount() {
    this.props.getAllUsers();
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllUsers: () => dispatch(getAllUsersAsyncAction()),
    deleteUser: (usr) => dispatch(deleteUserAsyncAction(usr)),
    updateUser: (user) => dispatch(updateUserAsycAction(user)),
    createUser: (user) => dispatch(createUserAsycAction(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
