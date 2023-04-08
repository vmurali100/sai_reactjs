import React from 'react'
import Parent from './Parent'

const Grandparent = ({msg}) => {
  return (
    <div>
      <h2>Welcome to Grand Parent Component !!</h2>
      <hr />
      {/* <Parent msg={msg}/> */}
      <Parent/>
    </div>
  )
}

export default Grandparent
