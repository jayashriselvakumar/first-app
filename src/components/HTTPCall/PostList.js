import axios from 'axios';
import React, { Component } from 'react'
class PostList extends Component {
    constructor() {
        super()
        this.state = {
            postListResponse: [],
            errorMsg:''
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log('response::', response);
                this.setState(
                    {
                        postListResponse: response.data
                    }
                )

            })
            .catch(error => {
                console.log('error', error.message)
                this.setState({errorMsg:error.message})
            })


    }
    render() {
        const { postListResponse, errorMsg } = this.state
        return (
            <div>
                <h1>Post Lists</h1>
                {
                    postListResponse.length?
                    postListResponse.map(post => <div id="post.id">{post.title}</div>):null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }

            </div>
        )
    }
}

export default PostList