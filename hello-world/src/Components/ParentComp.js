//Lect -26 (Pure Component) and 27 (Memo)

import React, {Component, PureComponent} from 'react';
import props from "./Props";
import RegComponent from "./RegComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component{

    constructor(props) {
        super(props);

        this.state = {
            name : 'Akshit'
        }
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                name: 'Akshit'
            })
        },2000)
    }

    render(){
        console.log("******Parent Component render******");
        return(
            <div>
                Parent Component
                {/*<RegComponent name ={this.state.name} />*/}
                {/*<PureComp name={this.state.name} />*/}
                <MemoComp name = {this.state.name} />
            </div>
        )
    }
}

export default ParentComp
