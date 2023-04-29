import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import "./style.css";

const FavouriteBox = () => {
    const { like, cart } = useSelector((state) => state);
    const likedItem = Object.values(like);

    return (
        <section className='favourite-box'>
            <div className='container'>
                <div className='content'>
                    {likedItem.length ? (
                        likedItem.map((el) => (
                            <ProductCard
                                data={el}
                                liked={el.id in like}
                                select={el.id in cart}
                                key={el.id}
                            />
                        ))
                    ) : (
                        <h1 className='favourite-title'>
                            Favourite box is empty 😞😞😞
                        </h1>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FavouriteBox;
