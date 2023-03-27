import "./App.css";
import Navbar from "./Navbar";
import User from "./User";
import UsersTable from "./UsersTable";
import { useEffect, useState } from "react";
import axios from "axios";
import UserFormRef from "./UserFormRef";

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

  const [userErrors, setUserErros] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "",
    language: "",
    zipCode: "",
    about: "",
  });

  useEffect(() => {
    getAllUsersFromServer();
  }, []);
  const getAllUsersFromServer = () => {
    axios.get("http://localhost:3201/users").then((res) => {
      console.log(res.data);
      setAllUsers(res.data);
    });
  };

  const addUser = (e) => {
    console.log(userDetails);
    const errors = {};
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (!userDetails.name.trim()) {
      errors.name = "User Name is Required !";
    } else if (userDetails.name.trim().length < 4) {
      errors.name = "User Name has to minimum 4 Characters !!";
    }
    if (!userDetails.email.trim()) {
      errors.email = "Please Enter a Email !"
    } else if (!emailPattern.test(userDetails.email)) {
      errors.email = "Please Enter a Valid Email !!"
    }
    if (!userDetails.phoneNumber.trim()) {
      errors.phoneNumber = "Please enter phone number"
    }
    else if (!phonePattern.test(userDetails.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number"
    }
    if (!userDetails.password.trim()) {
      errors.password = "Please enter a password"
    }
    else if (userDetails.password.trim().length < 8) {
      errors.password = "Password must be atleast 8 characters"
    }
    if (!userDetails.gender.trim()) {
      errors.gender = "Please select gender"
    }

    if (!userDetails.zipCode.trim()) {
      errors.zipCode = "Please enter a zipcode"
    }
    else if (userDetails.zipCode.trim().length !== 5) {
      errors.zipCode = "Please enter a valid zipcode"
    }
    if (!userDetails.language.trim()) {
      errors.language = "Please select a language"
    }
    if (!userDetails.about.trim()) {
      errors.about = "Please write something into about section"
    }

    axios.post("http://localhost:3201/users", userDetails).then(() => {
      console.log("User Added Successfully !!!");
      getAllUsersFromServer();
      clearForm();
    });
    setUserErros(errors);
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
    axios
      .put("http://localhost:3201/users/" + userDetails.id, userDetails)
      .then(() => {
        getAllUsersFromServer();
        clearForm();
      });
  };
  return (
    <>
      <Navbar />
      <div className="container ">
        {/* <UserFormRef/>*/}
        <div className="row">
        </div><div className="col-3">
          <User
            getAllUsersFromServer={getAllUsersFromServer}
            addUser={addUser}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
            udpateUser={udpateUser}
            setUserErros={setUserErros}
            userErrors={userErrors}
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
    </>
  );
}

export default App;
