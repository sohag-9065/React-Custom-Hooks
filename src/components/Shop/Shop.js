import React from 'react';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const Shop = () => {
    const [products, setProducts] = useProducts();
    // const [cart, setCart] = useState([]);

    const [cart, setCart] = useCart(products);
    
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity+=1;
            newCart = [...rest, exist];
        }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
        
    }

    return (
        <div className='shop-container' >
             <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
             </div>
             <div className="cart-container">
                <Cart cart={cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;