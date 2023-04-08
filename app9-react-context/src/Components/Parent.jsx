import React from 'react'
import Child from './Child'

const Parent = ({msg}) => {
  return (
    <div>
      <h2>Welcomet to Parent Component </h2>
      <hr />
      {/* <Child msg={msg}/> */}
      <Child/>
    </div>
  )
}

export default Parent
