import React from "react";
import { discountData } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "./style.css";

const Discount = () => {
  return (
    <section className="discount_section">
      <div className="container">
        <h2 className="discount_section-title">Акция</h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {discountData.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="card">
                <img src={el.image} alt={el.title} className="card_img" />
                <h3 className="card_title">{el.title}</h3>
                <p className="card_price">{el.price}</p>
                <button className="card_btn">Добавить в корзину</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <button className="prev">Prev</button>
        <button className="next">Next</button> */}
      </div>
    </section>
  );
};

export default Discount;
