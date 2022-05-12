import React from 'react'
import CartContainer from './func-based-redux-toolkit/components/CartContainer'
import Navbar from './func-based-redux-toolkit/components/Navbar'
import Modal from './func-based-redux-toolkit/components/Modal'
import { useDispatch, useSelector } from 'react-redux'



const Redux = () => {
  const dispatch = useDispatch();
  const {isModalOpen} = useSelector(state => state.cart);
  console.log(isModalOpen);
  return (
    <main>
    <Navbar/>
    <CartContainer/>
   {isModalOpen &&  <Modal/>}
    </main>
  )
}

export default Redux