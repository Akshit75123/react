// Lect - 37 Render Props part-2

// What is a Render Prop?
// The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function


import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div>
                {this.props.render(true)}
                {/*this is render props */}
                {/*for function add parenthesis at the end of the name and for the variable prop, do not add parenthesis*/}
            </div>
        );
    }
}

export default User;