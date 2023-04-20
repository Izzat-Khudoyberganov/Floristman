import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Discount from "./components/Discount";
import Footer from "./components/Footer";

const Category = () => {
    const { type } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://611758a730022f0017a05dda.mockapi.io/memory-game/floristman_items?category=${type}`
            )
                .then((response) => response.json())
                .then((json) => setData(json));
        };
        fetchData();
    }, [type]);

    // console.log(data);

    return (
        <div>
            <Header />
            <div className='container'>
                <div className='content'>
                    {data?.map((el) => (
                        <ProductCard
                            key={el.id}
                            image={el.images[0]}
                            title={el.name}
                        />
                    ))}
                </div>
            </div>
            <Discount />
            <Footer />
        </div>
    );
};

export default Category;
