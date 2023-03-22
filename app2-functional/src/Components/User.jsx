
import React from 'react'

const User = (props) => {
  return (
    <div>
      <h2>Welcome to User Component</h2>
      <p>Message from Parent is : {props.msg.fname}</p>
      <ul>
        {props.users.map((val)=> <li>{val}</li> )}
      </ul>
    </div>
  )
}

export default User
