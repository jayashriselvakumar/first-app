import React, { Component } from "react";
import ChildClassComponent from "./ChildClassComponent";

class ParentClassComponent extends Component {
    constructor() {
        super()
        
        this.state = {
            userName : 'jayashri'

        }
        this.handleClick = this.handleClick.bind(this);
        this.inputRef = React.createRef();
    }
    handleClick() {
        this.setState(
            {
                userName : 'magesh'
            }
        )
    }

    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <h1>I am Parent class component!!!!!!!!!!!!{this.state.userName}</h1>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick} >To change the name</button>
                <ChildClassComponent />
            </div>
        );
    }
}
    
export default ParentClassComponent
