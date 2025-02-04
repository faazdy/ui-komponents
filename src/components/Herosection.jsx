import React from 'react'
import "../styles/herosection.scss"

function Herosection({title, description, bg}) {
  return (
    <section className='hero-section' style={{backgroundImage: `url('${bg}')` }}>
        <h1>{title}</h1>
        <p>{description}</p>
    </section>
  )
}

export default Herosection