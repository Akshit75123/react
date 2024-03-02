// Lect-24

// Video-23
import React, { Component } from 'react';

class LifecycleD extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "Akshit"
        }
        console.log("LifecycleD constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleD getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifecycleD shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleD getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleD ComponentdidUpdate")
    }

    render() {
        console.log("LifecycleD rendered");
        return (
            <div><h1>LifeCycleD</h1></div>
        )
    }
}

export default LifecycleD