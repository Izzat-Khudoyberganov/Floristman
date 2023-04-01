import React from "react";
import { dataItems } from "./data";

const Book = () => {
    return (
        <div className='container'>
            <div className='reason-wrapper'>
                <h2 className='reason-wrapper__title'>
                    4 веские причины выбрать нас!
                </h2>
                <div className='reason-wrapper__box'>
                    {dataItems.map((el) => (
                        <div className='box-item' key={el.id}>
                            <img
                                src={el.image}
                                className='box-item__img'
                                alt='image'
                            />
                            <h3 className='box-item__title'>{el.title}</h3>
                            <p className='box-item__text'>{el.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Book;
