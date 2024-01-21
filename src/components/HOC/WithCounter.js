import React, { Component } from 'react'
const withCounter = (WrappedComponent, incrementValue) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        handleCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementValue
                }
            })


        }
        render() {
            return (<WrappedComponent count={this.state.count} handleCount={this.handleCount} {...this.props}/>)
        }
    }
    return WithCounter


}

export default withCounter