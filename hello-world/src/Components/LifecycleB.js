// Video-23
import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "Akshit"
    }
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB rendered");
    return (
      <div><h1>LifeCycleB</h1></div>
    )
  }
}

export default LifecycleB