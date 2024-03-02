//Lect-36 and 37 Render Props

import React, {Component} from 'react';

class HoverCounterTwo extends Component {

    render() {

        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} Times</h1>
            </div>
        );
    }
}

export default HoverCounterTwo;