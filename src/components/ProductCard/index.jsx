import React from "react";
import { useDispatch } from "react-redux";
import { handleLike } from "../../redux/favourite";
import classNames from "classnames";
import "./style.css";

import like from "../../img/like.svg";
import { addToCart, removeFromCart } from "../../redux/cart";

const ProductCard = ({ data, liked, select }) => {
    const dispatch = useDispatch();
    const handleLikeButtonClick = () => dispatch(handleLike(data));
    const selectItem = () =>
        dispatch(select ? removeFromCart(data.id) : addToCart(data));
    return (
        <div className='product-cart'>
            <button
                className={classNames("like-btn", liked && "active")}
                onClick={handleLikeButtonClick}
            >
                <img src={like} />
            </button>
            <img src={data?.images?.[0]} alt='image' />
            <h3 className='product-title'>{data.title}</h3>
            <div className='price-box'>
                <p className='product-price'>{data.price}</p>
                <p className='older-price'> 25 000 so'm</p>
            </div>
            <button className='cart-button' onClick={selectItem}>
                Add to cart
            </button>
        </div>
    );
};

export default ProductCard;
