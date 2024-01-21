import React, { Component } from "react";

class HoverCounterTwo extends Component {
   
    render() {
        const {count,handleClick}=this.props
        return (
            <h1 onMouseOver={handleClick}>Hover {count} times</h1>
        )
    }
}

export default HoverCounterTwo