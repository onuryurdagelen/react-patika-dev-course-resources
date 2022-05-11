import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import { increment,decrement,removeItem } from '../slices/cart-slice'

const CartItem = ({id,title,price,amount,img}) => {
    const dispatch = useDispatch();
    const {amount: cartAmount} = useSelector(state => state.cart);
    console.log('amount: ',amount)
   
  return (
    <article className='cart-item' key={id}>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>{'$'}{price}</h4>
            <button className="remove-btn" onClick={() =>{
                dispatch(removeItem(id))
            }}>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={() =>{
                dispatch(increment(id))
            }}>
                <ChevronUp/>
            </button>
            <p className='amount'>{amount}</p>
            <button onClick={() =>{
                if (amount ===1) {
                    dispatch(removeItem(id))
                }
                dispatch(decrement())
            }} className="amount-btn">
                <ChevronDown/>
            </button>
        </div>
    </article>
  )
}

export default CartItem