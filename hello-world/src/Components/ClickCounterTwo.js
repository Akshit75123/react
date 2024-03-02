//Lect-36 and 37 Render Props

import React, {Component} from 'react';

class ClickCounterTwo extends Component {

    render() {
        const {count,incrementCount} = this.props // for destructuring state
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        );
    }
}

export default ClickCounterTwo;