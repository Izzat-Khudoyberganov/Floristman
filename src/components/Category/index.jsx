import React from "react";
import { Link } from "react-router-dom";
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
                            <Link
                                to={el.link}
                                className='category-content_card-btn'
                            >
                                {el.text}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
