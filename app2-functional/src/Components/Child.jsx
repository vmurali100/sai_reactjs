import React, { useState } from "react";

const Child = (props) => {
  const [userInfo, setUserInfo] = useState({
    fname: "Murali",
    lname: "Krishna",
    email: "murali@gmail.com",
  });

  const [users, setUsers] = useState(["Ram", "Ravi", "Sam", "Sundar"]);

  return (
    <div>
      <h2>Welcome to Child Component !!</h2>
      <button onClick={()=>{props.getDataFromChild(userInfo)}}>Send Data TO Parent</button>
    </div>
  );
};

export default Child;
