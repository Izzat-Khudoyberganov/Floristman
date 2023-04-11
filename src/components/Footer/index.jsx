import React from "react";
import "./style.css";
import { catalogLink, footerLinks } from "./data";

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
                </div>
            </div>
        </div>
    );
};

export default Footer;
