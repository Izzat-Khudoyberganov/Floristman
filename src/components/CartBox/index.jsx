import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const CartBox = () => {
    const { cart } = useSelector((state) => state);
    const cartItems = Object.values(cart);

    return (
        <div className='cart-box'>
            <div className='container'>
                <div className='content'>
                    {cartItems?.map((el) => (
                        <ProductCard
                            data={el}
                            select={el.id in cart}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartBox;
