import React from "react";
import "./style.css"
import orderImg from "../../img/discount-img.png"
const Order = () => {
  return (
    <section className="order_section">
      <div className="container">
        <h2 className="discount_section-title">Заказать уникальный букет</h2>
        <div className="order_form-content">
            <form className="order_form">
                <input type="text" className="name_input" placeholder="Ваше имя*" required />
                <input type="tel" placeholder="Ваш телефон*" className="phone_input" required />
                <textarea cols="30" rows="10" placeholder="Ваша идея*" />
                <div className="btn_group">
                    <button type="button" className="add_file-btn">+ Прикрепить файл</button>
                    <button className="submit_btn" type="submit">Отправить</button>
                </div>
            </form>
            <div className="order_img">
                <img className="order_img-img" src={orderImg} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
