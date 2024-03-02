// Video -23
import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "Akshit"
    }

    console.log("LifecycleA constructor");
    // Contructor is a special function that will get called whenever a new component is created.
        // used for initializing state and Binding the event handlers
    //do not cause side effects i.e. HTTP requests
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA rendered");
    return (
      <div>
        <h1>LifeCycleA</h1>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA