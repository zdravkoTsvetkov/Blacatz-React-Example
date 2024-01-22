import React from 'react';

const Product = ({name, category, price, availability, addToCart }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <p>Availability: {availability ? 'Налични' : 'Не налични'}</p>
            <button onClick={() => addToCart(name)}>Add to Cart</button>
        </div>
    );
};

export default Product;