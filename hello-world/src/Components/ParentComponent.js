//Lect-15

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }
      this.greetParent=this.greetParent.bind(this)
    }
    //any functions needs to be bind before using
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}` )
    }
  render() {
    return (
      <div>
            <ChildComponent greetHandler={this.greetParent} /> 
      </div>
    )
  }
}

export default ParentComponent