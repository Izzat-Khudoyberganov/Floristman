import React from "react";
import "./style.css";

const ProductCard = ({ image, title, price }) => {
    return (
        <div className='product-cart'>
            <img src={image} alt='image' />
            <h3 className='product-title'>{title}</h3>
            <div className='price-box'>
                <p className='product-price'>{price}</p>
                <p className='older-price'> 25 000 so'm</p>
            </div>
            <button className='cart-button'>Add to cart</button>
        </div>
    );
};

export default ProductCard;
