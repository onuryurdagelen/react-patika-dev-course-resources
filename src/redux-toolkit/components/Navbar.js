import React from 'react'
import {useSelector} from 'react-redux'
import CartIcon from '../icons/CartIcon';
const Navbar = () => {
    const {amount} = useSelector(store => store.cart);
    // console.log(amount);
  return (
      <>
    <nav>
        <div className="nav-center">
            <h3>redux toolkit</h3>
            <div className="nav-container">
                <CartIcon/>
                <div className="amount-container">
                    <div className="total-amount">{amount}</div>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar