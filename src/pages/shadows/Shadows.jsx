import React from 'react'
import ShadowCard from './ShadowCard'
import Herosection from '../../components/Herosection'
import { shadows } from '../../data/data'

const herobg = 'assets/images/hero-shadows.png'

function Shadows() {
  return (
    <main className='shadows-main-content'>
      <Herosection title="Shadows" description="Choise ur favorite shadow." bg={herobg}/>
      <section className="shadows-gallery">
        {
          shadows.map(card =>{
            return <ShadowCard {...card} key={card.id}/>
          })
        }
      </section>
    </main>
  )
}

export default Shadows