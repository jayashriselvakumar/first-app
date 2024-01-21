import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'
const ModalComponent = () => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => {
        console.log("handleModal called")
        setShowModal(true)
    }
    return (
        <>
            <button onClick={handleModal}>Show button with modal</button>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />, document.body)}
        </>
    )
}

export default ModalComponent