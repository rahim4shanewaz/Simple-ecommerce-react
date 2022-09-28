import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] =useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCartHandler = (product) => {
        console.log(product)
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
            <h1>cart</h1>
            </div>
            
        </div>
    );
};

export default Shop;