//Lect- 34 & 35 HOC part-2 and part-3

// HOC -- > A pattern where a function takes a component as an argument and returns a new component.
// e.g. const newComponent = higherOrderComponent(originalComponent)
// const EnhancedComponent = higherOrderComponent(originalComponent)
// const IronMan = withSuit(TonyStark)

import React from 'react'

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                count : 0
            }
        }
        incrementCount = () =>{
            this.setState(prevState =>{
                return ({count : prevState.count+incrementNumber})
            })
        }
        render(){
            return (<WrappedComponent
                count = {this.state.count}
                incrementCount = {this.incrementCount}
                {...this.props} //passing the rest  of the props
            />)
        }
    }
    return WithCounter
}

export default withCounter