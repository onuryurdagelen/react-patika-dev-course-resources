import React, { Component } from 'react'
import { clearCart,calculateTotals } from '../slices/cart-slice';
import { connect } from "react-redux";
class CartContainer extends Component {

    componentDidMount(){
        calculateTotals
    }
  render() {
    if (this.props.amount < 1) {
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
    return (
        <section className='cart'>
        {/* cart header */}
        <header>
            <h2>your bag</h2>
        </header>
        {/* cart items */}
        <div>
            {this.state.cartItems.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        {/* cart footer */}
        <footer>
            <hr />
            <div className="cart-total">
                <h4>
                    total<span>$ {this.props.total}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={() => {
                this.props.clearCart();
            }}>clear cart</button>
        </footer>
    </section>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartItems: state.cart.cartItems,
        total: state.cart.total,
        amount: state.cart.amount
    };
}
const mapDispatchToProps = {clearCart,calculateTotals}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
