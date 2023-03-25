import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const User = () => {
  const [userInfo]=useState({
    user:{},
    isEdit:false,
    index:0
  })
  const [user, setUser] = useState({
    fname: "",
    lname: "",
  });

  const [users, setUsers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [index, setIndex] = useState(0);
  // Component Did Mount
  useEffect(() => {
    console.log("I am from UseEffect Hook !!");
    getAllUsersFromServer()
  }, []);

  const handleAddUser = (e) => {
    // e.preventDefault();
    // users.push(user)
    // const newUsers = [...users];
    // newUsers.push(user);
    // setUsers(newUsers);
    axios.post("http://localhost:3000/users",user).then((res)=>{
      console.log(res)
      getAllUsersFromServer()
    })
    clearForm();
  };

  const getAllUsersFromServer=()=>{
    axios.get("http://localhost:3000/users").then(response=>{
      setUsers(response.data)
    })
  }
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    console.log(e.target);
    setUser(newUser);
  };
  const editUser = (i) => {
    setIndex(i);
    setUser(users[i]);
    setIsEdit(true);
  };
  const deleteUser = (usr) => {
    // setUsers(users.filter((myUser) => myUser.fname !== usr.fname));
    axios.delete("http://localhost:3000/users/"+usr.id).then(()=>{
      getAllUsersFromServer()
    })
  };

  const clearForm = () => {
    setUser({
      fname: "",
      lname: "",
    });
  };
  const updateUser = () => {
    // const newUsers = [...users];
    // newUsers[index] = user;
    // setUsers(newUsers);
    // clearForm();
    // setIsEdit(false);
    axios.put("http://localhost:3000/users/"+user.id,user).then((resp)=>{
      getAllUsersFromServer()
    })
  };
  return (
    <div>
      <form>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          name="fname"
          onChange={(e) => {
            handleChange(e);
          }}
          value={user.fname}
        />{" "}
        <br />
        <label htmlFor="lname">Last Name : </label>
        <input
          type="text"
          name="lname"
          onChange={(e) => {
            handleChange(e);
          }}
          value={user.lname}
        />{" "}
        <br />
        {isEdit ? (
          <button onClick={updateUser} >
            Update User
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleAddUser(e);
            }}
            type="button"
          >
            Add User
          </button>
        )}
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, i) => (
            <tr key={i}>
              <td>{usr.fname}</td>
              <td>{usr.lname}</td>
              <td>
                <button
                  onClick={() => {
                    editUser(i);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(usr);
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
};

export default User;
