import React from 'react'
import './Modal.css'
const ModalContent =({onClose})=>{
    return(
        <div className="modal">
            <div>I am modal</div>
            <button onClick={onClose}>Close</button>
        </div>
    )

}
export default ModalContent