import React from "react";
import { categoryData } from "./data";
import "./style.css";

const Category = () => {
    return (
        <section className='category'>
            <div className='container'>
                <div className='category-content'>
                    {categoryData.map((el) => (
                        <div className='category-content__card' key={el.id}>
                            <img
                                src={el.image}
                                className='category-content__card-img'
                                alt={el.text}
                            />
                            <button className='category-content_card-btn'>
                                {el.text}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
