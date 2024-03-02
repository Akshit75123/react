//Lect - 28
import React, {Component} from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputref = React.createRef(); // method 1
        //method 2 -- callback ref
        this.cbRef = null //other method of creating ref
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }
    componentDidMount(){
        //for callback refs
        if (this.cbRef){
            this.cbRef.focus();
        }

        // for createRef method
        // this.inputref.current.focus();
        // console.log(this.inputref);
    }
    clickHandler = ()=>{
        alert(this.inputref.current.value);
    }

    render(){
        return(
            <div>
                <input type='text' ref={this.inputref}></input>
                <input type='text' ref={this.setCbRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
export default RefsDemo;