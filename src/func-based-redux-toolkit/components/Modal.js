import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart,setModal } from '../slices/cart-slice'

const Modal = () => {
    const dispatch = useDispatch();
    const {isModalOpen} = useSelector(state => state.cart);
  return (
    <aside className='modal-container'>
        <div className="modal">
            <h4>Remove all items froum your shopping cart?</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" 
                onClick={() => {
                    dispatch(clearCart())
                    dispatch(setModal(false))
                }}>confirm</button>
                <button className="btn clear-btn" 
                onClick={()=>{
                    dispatch(setModal(false))
                }}
                >cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal