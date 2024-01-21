import React, { Component } from 'react'
import withCounter from './WithCounter'
class ClickCounter extends Component {
   
    render() {
        const {count,handleCount} = this.props
        return (
           
               
                <button onClick={handleCount}>Click {count} times {this.props.name}</button>
           
        )
    }
}
export default withCounter(ClickCounter,5)