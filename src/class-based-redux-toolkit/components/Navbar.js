import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartIcon from '../icons/CartIcon';
class Navbar extends Component {
  render() {
    return (
        <>
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon/>
                    <div className="amount-container">
                        <div className="total-amount">{this.props.amount}</div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
  }
}

const mapStateToProps = (state) =>{
    return {
        amount:state.cart.amount
    }
}
export default connect(mapStateToProps)(connect);
