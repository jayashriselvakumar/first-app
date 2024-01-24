import React, { Component } from 'react'
import { UserContext } from '../../App'
const ComponentC = () => {
    return (
        <div>
            <UserContext.Consumer>
            {
                user=>{
                    return<div>user context value::{user}</div>
                }
            }
            </UserContext.Consumer>
        </div>
    )
}
export default ComponentC