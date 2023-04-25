import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Discount from "./components/Discount";
import FavouriteBox from "./components/FavouriteBox";

const Favourite = () => {
    return (
        <>
            <Header />
            <FavouriteBox />
            <Discount />
            <Footer />
        </>
    );
};

export default Favourite;
