import React from 'react'
import { UserContextConsumer } from './UserContext'

const User = ({msg}) => {
  return (
    <div>
      <h2>Welcome User Component !!!</h2>
      {/* <p>Message from Main Component is : {msg}</p> */}
      <UserContextConsumer>
        {(value)=>{
            console.log(value)
            return <ul>
                {value.map((usr,i)=> <li key={i}>{usr.email}</li> )}
            </ul>
        }}
      </UserContextConsumer>
    </div>
  )
}

export default User
