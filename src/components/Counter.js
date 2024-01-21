import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log('after count increment callback::',this.state.count)
        })
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h1>Count Increment:{this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default Counter
