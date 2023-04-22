import React from "react";
import { useDispatch } from "react-redux";
import { handleLike } from "../../redux/favourite";
import "./style.css";

import like from "../../img/like.svg";

const ProductCard = ({ data, liked }) => {
    const dispatch = useDispatch();
    const handleLikeButtonClick = () => dispatch(handleLike(data));
    console.log(data?.title);
    return (
        <div className='product-cart'>
            <button className='like-btn' onClick={handleLikeButtonClick}>
                <img src={like} />
            </button>
            <img src={data?.images?.[0]} alt='image' />
            <h3 className='product-title'>{data.title}</h3>
            <div className='price-box'>
                <p className='product-price'>{data.price}</p>
                <p className='older-price'> 25 000 so'm</p>
            </div>
            <button className='cart-button'>Add to cart</button>
        </div>
    );
};

export default ProductCard;
