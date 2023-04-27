import React from "react";
import Header from "./components/Header";
import Discount from "./components/Discount";
import Footer from "./components/Footer";
import CartBox from "./components/CartBox";

const Cart = () => {
    return (
        <>
            <Header />
            <CartBox />
            <Discount />
            <Footer />
        </>
    );
};

export default Cart;
