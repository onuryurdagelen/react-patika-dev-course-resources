import React from 'react'
// import Navbar from './Navbar'
import StyledNavbar from './StyledNavbar'
import {Outlet} from 'react-router-dom'
const SharedLayout = () => {
  return (
    <>
    <StyledNavbar/>
      <Outlet/>

    </>
  )
}

export default SharedLayout