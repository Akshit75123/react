//Lect -16 --conditional rendering

import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedin: true
    }
  }
  render() {
    //method 4 -- shortcircuit operator
    // return this.state.isLoggedin&&<div>Welcome Akshit</div>
    
    // method -3 --ternary operator
    return this.state.isLoggedin?
    <div>Welcome Akshit</div>:
    <div>Welcome Guest</div>


    // // method 2 -- writing element variables
    // let Message;
    // if (this.state.isLoggedin){
    //   Message = <div>Welcome Akshit</div>
    // } else {
    //   Message = <div>Welcome Guest</div>
    // }
    // return (
    //   <div>
    //     {Message}
    //   </div>
    // )


    //method - 1 if else 
    // if (this.state.isLoggedin){
    //   return (
    //     <div>
    //       Welcome Akshit
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       Welcome Guest
    //     </div>
    //   )
    // }
    // return (
    //   <div>
    //     <h1>Welcome Akshit</h1>
    //     <h2>Welcome Guest</h2>
    //   </div>
    // )
  }
}

export default UserGreeting