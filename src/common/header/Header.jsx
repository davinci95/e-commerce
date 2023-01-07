import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

import "./header.css"

const Header = ({cartItem}) => {
  return (
      <>
      <Head />
      <Search cartItem={cartItem}/>
      <Navbar />
    </>
  )
}

export default Header