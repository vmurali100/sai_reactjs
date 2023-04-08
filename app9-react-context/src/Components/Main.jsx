import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Grandparent from "./Grandparent";
import { UserContextProvider } from "./UserContext";

const Main = () => {
  const [myName, setMyName] = useState("React Context Topic !!!");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data)
      });
  }, []);
  return (
    <div>
      <h2>Welcome to Main Component !!</h2>
      <hr />
      {/* <Grandparent msg={myName}/> */}
      <UserContextProvider value={users}>
        <Grandparent />
      </UserContextProvider>
    </div>
  );
};

export default Main;
