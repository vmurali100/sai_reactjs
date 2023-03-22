import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to Person Component</h2>
      </div>
    )
  }
  componentWillUnmount(){
    console.log("I am Going to be removed Now !!!")
  }
}
