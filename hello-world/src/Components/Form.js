//Lect-21
//Controlled Components -->
// these contain the state and then use setState function in order to handle the onChange event
import React, {Component} from 'react';

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            comments : '',
            topic : 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value //updated value of the input tag
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault() //for preventing the form data after clicking on submit
    }
    render(){
        // for destructuring the state properties
        // const {username, comments, topic} = this.state --> remove this.state from every this.state.property
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type = 'text'
                        value = {this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                {/*adding the controlled components of textarea and select tag */}
                <div>
                    <label>Comments</label>
                    <textarea
                        value = {this.state.comments}
                        onChange={this.handleCommentsChange}
                    >
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select
                        value = {this.state.topic}
                        onChange={this.handleTopicChange}
                    >
                        <option value = "react">React</option>
                        <option value = "angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

export default Form;