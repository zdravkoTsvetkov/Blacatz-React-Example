import React, {useState} from 'react';
import Product from './product';
import './ProductList.css';
import Cart from './Cart';



const products = [
    {
        name: 'хляб',
        category: 'Category A',
        price: 10.99,
        availability: true,
    },
    {
        name: 'сирене',
        category: 'Category B',
        price: 24.99,
        availability: false,
    },
    {
        name: 'домати',
        category: 'Category C',
        price: 14.99,
        availability: true,
    },
];




const ProductList = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [cart, setCart] = useState([]);

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleShowAvalaibleOnlyChange = () => {
        setShowAvailableOnly(!showAvailableOnly);
    };

    const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedProducts = showAvailableOnly
    ? filteredProducts.filter((product) => product.availability )
    : filteredProducts;

    const addToCart = (productName) => {
        setCart([...cart, productName]);
      };

    return (
        <div className="container">
            <h1>Product List</h1>
            <input 
              type="text"
              placeholder="Search by product name"
              value={searchTerm}
              onChange={handleSearchTermChange}
            />
            <label>
                <input 
                type="checkbox"
                checked={showAvailableOnly}
                onChange={handleShowAvalaibleOnlyChange}
                />
                Show only avalaible products
            </label>

            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Category
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Availability
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayedProducts.map((product, index) => (
                        <Product 
                          key={index}
                          name={product.name}
                          category={product.category}
                          price={product.price}
                          availability={product.availability}
                          addToCart={() =>addToCart(product)}
                        />
                    ))}
                     
                </tbody>
            </table>
            <Cart cartItems={cart} />
        </div>
    );
};
export default ProductList;