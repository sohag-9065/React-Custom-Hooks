import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    let total =0;
    let shipping = 0;
    let quantity = 0;
    // console.log("hi cart");
    for(const product of cart){
        quantity = quantity + product.quantity;
        total+=(product.price * product.quantity);
        shipping+=product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const tax_int = parseFloat(tax)
    const grandt_toal = total + shipping + tax_int ;
     return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandt_toal} </h5>
        </div>
    );
};

export default Cart;