import React from 'react'
import Herosection from '../../components/Herosection'

const herobg = 'assets/images/hero-cards.png'
function CardList() {
  return (
    <main className='cards-main-content'>
        <Herosection title="Cards" description="Hey" bg={herobg}/>
    </main>
  )
}

export default CardList