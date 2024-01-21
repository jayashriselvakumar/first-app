import React, { Component } from 'react'
import withCounter from './WithCounter'
class HoverCounter extends Component {
   
    render() {
        const {count,handleCount} = this.props
        return (
            <div>
               
                <button onMouseOver={handleCount}>Hover {count} times</button>
            </div>
        )
    }
}

export default withCounter(HoverCounter,10)