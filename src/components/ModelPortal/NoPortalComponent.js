import React, { useState } from 'react'
import ModalContent from './ModalContent'
const NoPortalComponent = () => {
    const [showModal, setShowModal] = useState(false)
    const handleModal = () => {
        console.log("handleModal called")
        setShowModal(true)
    }
    return (
        <>
            <button onClick={handleModal}>Show button without modal</button>
            {showModal &&
            <ModalContent onClose={()=>setShowModal(false)}/>}
        </>
    )
}

export default NoPortalComponent