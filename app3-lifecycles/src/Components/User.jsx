import React, { Component } from "react";
import Child from "./Child";
import Person from "./Person";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
        count:0,
        showUser:true
    };
    // 1. Mounting Phase
    // 2. Updating Phase
    // 3. Un mountning Phase

    // console.log("I am from constructor .. And I will be Triggered First !!!");
  }

  static getDerivedStateFromProps() {
    // console.log(
    //   "I am from getDerivedStateFromProps . I will be Triggering Second !!"
    // );
    return null;
  }

  render() {
    // console.log("I am from Render Method !! ")
    return (
      <div>
        <h2>Welcome to User Component !!</h2>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase Count</button>
        <br />
        <br />
        <button onClick={()=>{this.setState({showUser:false})}}>Hide Person</button>
        <Child count={this.state.count}/>
        {this.state.showUser && <Person/>}
      </div>
    );
  }

  componentDidMount(){
    // console.log("I am from componentDidMount Method . I will be triggered after Render Method !!")
  }
}
