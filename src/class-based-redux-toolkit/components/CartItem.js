import React, { Component } from 'react'
import { increment,decrement,removeItem } from '../slices/cart-slice'
import ChevronDown from '../icons/ChevronDown'
import ChevronUp from '../icons/ChevronUp'
import { connect } from "react-redux";
class CartItem extends Component {
  render() {
      const {id,img,price,amount} = this.props;
    return (
        <article className='cart-item' key={id}>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>{'$'}{price}</h4>
            <button className="remove-btn" onClick={() =>{
                this.props.removeItem(id)
            }}>remove</button>
        </div>
        <div>
            <button className="amount-btn" onClick={() =>{
                this.props.increment(id)
            }}>
                <ChevronUp/>
            </button>
            <p className='amount'>{amount}</p>
            <button onClick={() =>{
                if (amount ===1) {
                    this.props.removeItem(id)
                }
                this.props.decrement(id)
            }} className="amount-btn">
                <ChevronDown/>
            </button>
        </div>
    </article>
    )
  }
}
const mapDispatchToProps = {increment,decrement,removeItem};

export default connect(null,mapDispatchToProps)(CartItem);