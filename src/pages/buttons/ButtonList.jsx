import React from 'react'
import Herosection from '../../components/Herosection'
import Button from './Button'
import { buttons } from '../../data/data'

const herobg = 'assets/images/hero-buttons.png';

function ButtonList() {
  return (
    <main className='buttons-main-content'> 
        <Herosection title="Buttons" description="Choise ur favorite button." bg={herobg}/>
        <section className="buttons-gallery">
            {
                buttons.map(btn =>{
                    return <Button {...btn} key={btn.id}/>
                })
            }
        </section>
    </main>
  )
}

export default ButtonList