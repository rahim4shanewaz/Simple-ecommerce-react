import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCartHandler = (product) => {
        const newCart= [...cart , product]
        console.log(newCart)
         setCart(newCart);
    }
    return (
        <div className='shop-body'>
            <div className='products'> 
            {
                products.map(product => <Product
                                                 product={product}
                                                 key={product.id}
                                                 addToCartHandler = {addToCartHandler}
                                                  >

                </Product>)
            }
           

            </div>
            <div className='cart'> 
            <h1>cart : {cart.length}</h1>
            <p></p>
            </div>
            
        </div>
    );
};

export default Shop;