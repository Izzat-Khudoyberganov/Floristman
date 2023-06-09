import React from "react";
import Category from "./components/Category";
import Data from "./components/Data";
import Discount from "./components/Discount";
import Header from "./components/Header";
import Order from "./components/Order";
import Book from "./components/Book";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <Category />
            <Discount />
            <Order />
            <Data />
            <Book />
            <Footer />
        </>
    );
};
export default Home;
