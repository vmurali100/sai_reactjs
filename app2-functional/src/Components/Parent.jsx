import React from 'react'
import Child from './Child'

const Parent = () => {

    const getDataFromChild=(data)=>{
        console.log(data)
    }
  return (
    <div>
        <h2>Welcome to Parent Component !!</h2>
        <hr />
      <Child getDataFromChild={getDataFromChild}/>
    </div>
  )
}

export default Parent
