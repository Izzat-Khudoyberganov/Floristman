import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import "./style.css";

const FavouriteBox = () => {
    const { like } = useSelector((state) => state);
    const likedItem = Object.values(like);

    return (
        <section className='favourite-box'>
            <div className='container'>
                <div className='content'>
                    {likedItem.map((el) => (
                        <ProductCard
                            data={el}
                            liked={el.id in like}
                            key={el.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FavouriteBox;
