import React from "react";
import { discountData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "./style.css";
import ProductCard from "../ProductCard";

const Discount = () => {
    return (
        <section className='discount_section'>
            <div className='container'>
                <h2 className='discount_section-title'>Акция</h2>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className='mySwiper'
                >
                    {discountData.map((el) => (
                        <SwiperSlide key={el.id}>
                            <ProductCard data={el} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Discount;
