import React from "react";
import { useState } from "react";
import { useRef } from "react";

const UserFormRef = () => {
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [userformErrors, setUserFormErrors] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const [isInValid, setIsInValid] = useState(true);
  var fnameRef = useRef(null);
  var lnameRef = useRef(null);
  var emailRef = useRef(null);

  var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const addUser = (event) => {
    event.preventDefault();

    let newUser = { ...userDetails };
    let errors = {};
    newUser = {
      fname: fnameRef.current.value,
      lname: lnameRef.current.value,
      email: emailRef.current.value,
    };

    if (!newUser.fname.trim()) {
      errors.fname = "Please Enter First Name !";
    }
    if (!newUser.lname.trim()) {
      errors.lname = "Please Enter Last Name !";
    }
    if (!newUser.email.trim()) {
      errors.email = "Please Enter Email !";
    } else if (!emailPattern.test(newUser.email.trim())) {
      errors.email = "Please Enter a Valid Email !";
    }

    setUserFormErrors(errors);
    console.log(fnameRef.current.value);
  };
  const validate = () => {
    if (
      fnameRef.current.value.length > 0 &&
      lnameRef.current.value.length > 0 &&
      emailPattern.test(emailRef.current.value)
    ) {
      setIsInValid(false);
    } else {
      setIsInValid(true);
    }
  };
  return (
    <div>
      <form onSubmit={addUser}>
        <label htmlFor="fname">First Name : </label>
        <input type="text" ref={fnameRef} onChange={validate} /> <br />
        <span className="error">{userformErrors.fname}</span> <br />
        <label htmlFor="lname">Last Name : </label>
        <input type="text" ref={lnameRef} onChange={validate} /> <br />
        <span className="error">{userformErrors.lname}</span> <br />
        <label htmlFor="email">Email : </label>
        <input type="text" ref={emailRef} onChange={validate} /> <br />
        <span className="error">{userformErrors.email}</span> <br />
        <button className="btn btn-primary" disabled={isInValid}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserFormRef;
