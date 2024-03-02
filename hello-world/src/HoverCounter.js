//Lect 33,34,35 HOC Part 1,2,3

import React, {Component} from 'react';
import withCounter from "./Components/withCounter";

class HoverCounter extends Component {

    render() {
        // const {count, incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} Times</h2>
            </div>
        );
    }
}

export default withCounter(HoverCounter,10);