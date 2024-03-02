//Lect-11
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        // this.setState({
        //     count: this.state.count+1
        // },
        // ()=>{
        //     console.log('Callback value', this.state.count)
        // }
        // )


        this.setState(prevState => ({
            count: prevState.count+1
        })) // when state is changed on the basis of the previous state then, function has to be passed in the setState method instead of object.

        console.log(this.state.count)
        //whenever you have to place a code for the updated state by the setState method, do not place it just after the setState method, place it in the setstate callback.
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter