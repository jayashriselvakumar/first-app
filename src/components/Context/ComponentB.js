import React, { Component, useContext } from 'react'
import ComponentC from './ComponentC'
import { ChannelContext, UserContext } from '../../App'
const ComponentB = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            {/* <ComponentC/> */}
            {user}-{channel}
        </div>
    )
}
export default ComponentB