//Lect 9

import React, {Component} from 'react';
class PropsClass extends Component{
    render(){
        return(
            <h1>Hello {this.props.name} working as {this.props.job}</h1>
        )
    }
}

export default PropsClass;
