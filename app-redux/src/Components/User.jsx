import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUserAction, deleteUserAction } from './action';

class User extends Component {
  state = {
    users: {
      fname: "",
      lname: "",
      email: ""
    }
  }

  handleChange(e) {
    let newUser = { ...this.state.users };
    newUser[e.target.name] = e.target.value;
    this.setState({ users: newUser });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='fname'>First Name</label>
          <input type= "text" name='fname' value={this.state.users.fname} onChange={(e) => this.handleChange(e)} /><br />
          <label htmlFor='lname'>Last Name</label>
          <input type= "text" name='lname' value={this.state.users.lname} onChange={(e) => this.handleChange(e)} /><br />
          <label htmlFor='email'>Email</label>
          <input type= "text" name='email' value={this.state.users.email} onChange={(e) => this.handleChange(e)} /><br />
          <button type='button' onClick={() => { this.props.addUser(this.state.users) }}>Add User</button>
        </form>
        <table border={1}>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.props.allUsers.map((usr, i) => (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.lname}</td>
                  <td>{usr.email}</td>
                  <td><button type='button'> Edit</button></td>
                  <td><button type='button'> Delete</button></td>
                </tr>
    ))}
          </tbody>
                   
        </table>
      </div>


    )
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
    deleteUSer: (usr) => dispatch(deleteUserAction(usr)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
