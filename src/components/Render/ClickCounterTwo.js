import React, { Component } from "react";

class ClickCounterTwo extends Component {
    
    render() {
        const{count,handleClick}=this.props
        return (
            <button onClick={handleClick}>Click {count} times</button>
        )
    }
}
export default ClickCounterTwo