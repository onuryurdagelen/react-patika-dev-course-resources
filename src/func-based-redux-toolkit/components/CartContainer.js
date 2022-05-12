import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'

import CartItem from './CartItem'
import { useSelector } from 'react-redux/es/exports';
import { calculateTotals,setModal, getCartItems } from '../slices/cart-slice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const {cartItems,total,amount,error,isLoading} = useSelector(state => state.cart);

    useEffect(()=>{
        dispatch(calculateTotals());
    },[])

    useEffect(()=>{
        dispatch(getCartItems('random'));
    },[])

    if(isLoading){
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        )
    }
    else if (amount < 1) {
        return (
            <section className="cart">
                {/* cart header */}
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        )
    }
    else if (error) {
        return  <div className="loading">
        <h1>{error}</h1>
    </div>
    }
    
  return (
    <section className='cart'>
        {/* cart header */}
        <header>
            <h2>your bag</h2>
        </header>
        {/* cart items */}
        <div>
            {cartItems.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        {/* cart footer */}
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total<span>${''}{parseFloat(total).toFixed(2)}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={() => {
                dispatch(setModal(true))
                
            }}>clear cart</button>
        </footer>
    </section>
  )
}

export default CartContainer