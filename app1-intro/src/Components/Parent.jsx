import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    getDataFromChild=(info)=>{
        console.log(info)
    }
  render() {
    return (
      <div>
        <h2>Welcome to Parent Component !!</h2>
        <hr />
        <Child parentEvent={this.getDataFromChild}/>
      </div>
    )
  }
}
