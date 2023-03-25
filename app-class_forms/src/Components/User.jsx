import React, { Component } from "react";
import axios from "axios";

export default class User extends Component {
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

  getAllUsersFromServer=async ()=>{
    await axios.get("http://localhost:3004/users").then(response=>{
      this.setState({users: response.data})
    })
    console.log(this.state.users);
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
    const addUsers = async() => {
      if (this.state.isEdit) {
        updateUser();
      }
      else {
        await axios.post("http://localhost:3004/users",this.state.user).then((res) => {
          this.getAllUsersFromServer();
        });
        clearForm()
      }
    }
    const clearForm = () => {
      this.setState({
        user: {
          fname: "",
          lname: ""
        }
      })
    };

    const updateUser = async () => {
      // const updatedUsers = [...this.state.users];
      // updatedUsers[this.state.index] = this.state.user;
      // await axios.put(`http://localhost:3004/users/${this.state.index + 1}`,this.state.user);
      // this.setState({
      //   index: null,
      //   isEdit: false,
      //   user: { fname: "", lname: "" },
      //   users: updatedUsers
      // });
      axios.put("http://localhost:3004/users/"+this.state.user.id,this.state.user).then((resp)=>{
      this.getAllUsersFromServer();
    })
    }

    const editUser = (i) => {
      const usr = this.state.users[i];
      this.setState({ index: i, isEdit: true, user: usr })
    }

    const deleteUser = async (usr) => {
      axios.delete("http://localhost:3004/users/"+usr.id).then(()=>{
      this.getAllUsersFromServer()
    })
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
                    <button onClick={() => { deleteUser(usr) }}>Delete</button>
                  </td>
                </tr>
              </tbody>)
          })}
        </table>

      </div>
    );
  }

  async componentDidMount() {
    // try {
    //   const response = await axios.get("http://localhost:3004/users");
    //   this.setState({ users: response.data });
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(this.state.users)
    this.getAllUsersFromServer()
  }
}
