// Lect-24
// Updating Lifecycle

import React, { Component } from 'react'
import LifecycleD from "./LifecycleD";

class LifecycleC extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"akshit"
        }

        console.log("LifecycleC constructor");
        // Constructor is a special function that will get called whenever a new component is created.
        // used for initializing state and Binding the event handlers
        //do not cause side effects i.e. HTTP requests
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleC getDerivedStateFromProps");
        return null;
    }



    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("LifecycleC shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleC getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Lifecycle ComponentdidUpdate")
    }

    changeState = () => {
        this.setState({
            name : 'Codeevolution'
        })
    }
    render() {
        console.log("LifecycleC rendered");
        return (
            <div>
                <h1>LifecycleC </h1>
                <button onClick = {this.changeState}>Change State</button>
                <LifecycleD />
            </div>
        )
    }
}

export default LifecycleC