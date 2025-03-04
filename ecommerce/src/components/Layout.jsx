import React from 'react'
import Header1 from './Header1'

function Layout({children}) {
  return (
    <div>
        <Header1/>
       
        <div className='mt-15 md:mt-0'>
        {children}
        </div>
    </div>
  )
}

export default Layout