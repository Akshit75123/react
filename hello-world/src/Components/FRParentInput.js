//Lect -30 Forwarding refs
//What we are trying to do -- When we click the button, the input written in the child component should recieve focus.

import React, {Component} from 'react';
import FRInput from "./FRInput";

class FRParentInput extends Component{
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    clickHandler = ()=>{
        this.inputRef.current.focus();
    }
    render(){
        return(
            <div>
                <FRInput ref = {this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}
export default FRParentInput;