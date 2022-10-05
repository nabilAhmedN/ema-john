import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const {cart} = props;
    let total = 0;
    let shipping = 0;

    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        // console.log(total)
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'><h2>cart</h2>
           <p>Selected Items: {cart.length}</p>
           <p>Total Price: ${total}</p>
           <p>Total Shipping: ${shipping}</p>
           <p>Tax: {tax}</p>
           <h5>Grand Total: {grandTotal}</h5>
        </div>
    );
};

export default Cart;