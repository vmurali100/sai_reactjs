import "./App.css";
import Navbar from "./Navbar";
import User from "./User";
import UsersTable from "./UsersTable";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    language: "",
    zipCode: "",
    about: "",
  });

  useEffect(()=>{
    getAllUsersFromServer()
  },[])
  const getAllUsersFromServer = () => {
    axios.get("http://localhost:3201/users").then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  };

  const addUser = (e) => {
    console.log(userDetails);
    axios.post("http://localhost:3201/users", userDetails).then(() => {
      console.log("User Added Successfully !!!");
      getAllUsersFromServer();
      clearForm();
    });
  };

  const clearForm = () => {
    setUserDetails({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "",
      language: "",
      zipCode: "",
      about: "",
    });
  };

  const deleteUser = (user) => {
    axios.delete("http://localhost:3201/users/" + user.id).then(() => {
      getAllUsersFromServer();
    });
  };

  const editUser = (user) => {
    setUserDetails(user);
  };
  const udpateUser = () => {
    axios.put("http://localhost:3201/users/"+userDetails.id,userDetails).then(()=>{
      getAllUsersFromServer()
      clearForm()
    })
  };
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row">
          <div className="col-3">
            <User
              getAllUsersFromServer={getAllUsersFromServer}
              addUser={addUser}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              udpateUser={udpateUser}
            />
          </div>
          <div className="col-9">
            <UsersTable
              allUsers={allUsers}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
