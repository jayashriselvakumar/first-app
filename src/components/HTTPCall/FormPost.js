import axios from 'axios'
import React, { Component } from 'react'
class FormPost extends Component {
    constructor() {
        super()
        this.state = {
            userId: '',
            title: '',
            body: ''

        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("result", this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(response => {
                console.log('response:::', response)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <h2>Form Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div><input type="text" name="userId" value={userId} onChange={this.changeHandler} /></div>
                    <div> <input type="text" name="title" value={title} onChange={this.changeHandler} /></div>
                    <div><input type="text" name="body" value={body} onChange={this.changeHandler} /></div>
                    <div><button type="submit">Submit</button></div>
                </form>
            </div>
        )
    }
}

export default FormPost