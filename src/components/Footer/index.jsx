import React from "react";
import "./style.css";
import { catalogLink, footerLinks, phoneLinks } from "./data";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-content__item'>
                        <h2 className='footer-content__item-title'>
                            Информация
                        </h2>
                        <nav className='footer-content__item-nav'>
                            {footerLinks.map((el) => (
                                <a
                                    href='/'
                                    className='footer-content__links'
                                    key={el.id}
                                >
                                    {el.link}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className='footer-content__item'>
                        <h2 className='footer-content__item-title'>Каталог</h2>
                        <nav className='footer-content__item-nav'>
                            {catalogLink.map((el) => (
                                <a
                                    href='/'
                                    className='footer-content__links'
                                    key={el.id}
                                >
                                    {el.text}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className='footer-content__item'>
                        <h2 className='footer-content__item-title'>Каталог</h2>
                        <nav className='footer-content__item-nav'>
                            {phoneLinks.map((el) => (
                                <div className='footer-content__phone'>
                                    <img src={el.image} alt={el.text} />
                                    <a
                                        href='/'
                                        className='footer-content__links phone_link'
                                        key={el.id}
                                    >
                                        {el.text}
                                    </a>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
