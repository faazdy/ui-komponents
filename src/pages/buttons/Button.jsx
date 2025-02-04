import React from 'react'
import { useState } from 'react'
import "../../styles/buttons.scss"
import Modal from '../../components/Modal'

function Button( {id, classname, styles} ) {
    const [openModal, setOpenModal] = useState(false)
    const handleOpen = ()=>{
        setOpenModal(true)
    }
    const handleClose = ()=>{
        setOpenModal(false)
    }
  return (
    <>
        <div className="button-card">
            <button className={`button-example ${classname}`} onClick={handleOpen}>Button #{id}</button>
        </div>
        <Modal code={styles ? styles : 'NO STYLES'} openCode={openModal} onClose={handleClose}/>
    </>
  )
}

export default Button