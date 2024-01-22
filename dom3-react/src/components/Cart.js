import React from 'react';

const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0 );

    return (
        <div>
            <h2>Shopiping Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{item.name} - ${item.price}</li>
                ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    )
}

export default Cart;