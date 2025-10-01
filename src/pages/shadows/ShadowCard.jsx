import React from 'react'
import { useState } from 'react'
import Modal from "../../components/Modal"
import "../../styles/modal.scss"
import "../../styles/shadows.scss"

function ShadowCard( {id, styles} ) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = ()=>{
        setIsOpen(true)
    }
    const handleCloseModal = ()=>{
        setIsOpen(false)
    }
    
  return (
    <>
        <div className='shadow-card' style={{boxShadow: styles}}>
            <strong>Container #{id}</strong>
            <button className='open-code' onClick={handleOpenModal}>Code</button>
        </div>
        <Modal onClose={handleCloseModal} openCode={isOpen} codecss={`box-shadow: ${styles};`}/>
    </>
  )
}

export default ShadowCard
