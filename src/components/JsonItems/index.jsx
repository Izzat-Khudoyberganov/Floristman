import React from "react";
import "./style.css";

const JsonItems = ({ title, body }) => {
    return (
        <div className='cart'>
            <h2 className='cart-title'>{title}</h2>
            <p className='cart-text'>{body}</p>
        </div>
    );
};

export default JsonItems;
