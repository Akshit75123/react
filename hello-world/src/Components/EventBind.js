//Lect -14
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      //method - 3 most important (in React documentation)
      this.clickhandler=this.clickhandler.bind(this) // binding in the constructor

    }
    // clickhandler(){ 
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     //this keyword is undefined in the event handler
    // }

    // method 4 --> writing the event click handler handler as the arrow functions
    // class property as arrow functions 
    clickhandler = () => {
      this.setState({
        message: 'GoodBye!'
      })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickhandler.bind(this)}>Click</button> //method 1 -- clickhandler.bind(this) */}
        {/* <button onClick={()=>this.clickhandler}>Click</button>  // method 2 -- using arrow functions in render method */}
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default EventBind