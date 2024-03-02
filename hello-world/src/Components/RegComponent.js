//Lect - 26

import React, { Component } from 'react';

class RegComponent extends Component{
    render(){
        console.log("Regular Component render");
        return(
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}
export default RegComponent;