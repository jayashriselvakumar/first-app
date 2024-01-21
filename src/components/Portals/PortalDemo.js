import React from 'react'
import ReactDOM from 'react-dom'

const PortalDemo = () => {
    return ReactDOM.createPortal(
        <h1>Hello portal demo</h1>,
        document.getElementById('portal-root'))
}
export default PortalDemo