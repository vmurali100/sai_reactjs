import React from 'react'
import User from './User'

const Child = ({msg}) => {
  return (
    <div>
      <h2>Welcome to Child Component !!</h2>
      <hr />
      {/* <User msg={msg}/> */}
      <User/>
    </div>
  )
}

export default Child
