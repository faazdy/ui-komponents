import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <section className='not-found-main'>
        <div className="not-found-info">
            <h1>Oops! Page not found :/</h1>
            <p>Error 404</p>
            <Link to='/'>Go to home</Link>
        </div>
        <div className="not-found-image">
            <img src="./assets/images/notfound.webp" alt="error" />
        </div>
    </section>
  )
}

export default Notfound
