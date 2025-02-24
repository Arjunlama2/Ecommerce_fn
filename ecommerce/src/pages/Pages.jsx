import React from 'react'
import About from './About'
import Service from './Service'
import Contact from './Contact'

function Pages() {
  return (
    <div>
    <div>About page
      <About/>
      
    </div>
    <div>Service page
      <Service/>
    </div>
    <div>Contact page
      <Contact/>
    </div>
    </div>
  )
}

export default Pages