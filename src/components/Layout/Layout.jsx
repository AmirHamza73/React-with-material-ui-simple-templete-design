import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Topheader from './Topheader'

function Layout({children}) {
  return (
    <div>
        <Topheader />
        <Header/>
        <>{children}</>
        <Footer/>
    </div>
  )
}

export default Layout