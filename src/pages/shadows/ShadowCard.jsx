import React from 'react'
import { useState } from 'react'
import "../../styles/modal.scss"
import "../../styles/shadows.scss"

function ShadowCard( {id, styles, author} ) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenModal = ()=>{
        setIsOpen(!isOpen)
    }
    
    
  return (
    <>
        <div className='shadow-card' style={{boxShadow: styles}}>
            <strong>Container #{id}</strong>
            <button className='open-code' onClick={handleOpenModal}>Code</button>
        </div>
        <div className={isOpen ? 'modal-code open' : 'modal-code'}>
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick={handleOpenModal}>X</button>
                </div>
                <div className="code">
                    <pre>
                        <code>box-shadow: {styles};</code>
                    </pre>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShadowCard