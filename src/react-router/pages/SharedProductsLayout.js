import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedProductsLayout = () => {
  return (
    <>
    <h2>products</h2>
    <Outlet/>
    </>
  )
}

export default SharedProductsLayout