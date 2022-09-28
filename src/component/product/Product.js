import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {id, name, price, img, seller, ratings} = product;
    return (
        <div className='product-card'>
            <div className='img-box'>
            <img src={img} alt="" />
            </div>
            
            <div className='product-details-box'>
            <div>
            <h3>{name}</h3>
            <h4>Price: ${price}</h4>
            </div>
           <div>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
           </div>
          
            </div>
            <div className='btn-box'>
            <button>Add to cart</button>
           </div>
        </div>
    );
};

export default Product;