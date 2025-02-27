import React from 'react'
import Header1 from './Header1'

function Layout({children}) {
  return (
    <div>
        <Header1/>
       
        <div>
        {children}
        </div>
    </div>
  )
}

export default Layout