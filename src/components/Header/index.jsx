import React from "react";
import { Link } from "react-router-dom";
import { navbarLink } from "./data";
import "./style.css";

import likeImg from "../../img/like.svg";
import cartImg from "../../img/cart.svg";
import logo from "../../img/logo.svg";

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className='header-top'>
                    <nav className='header-top__nav'>
                        <Link to='/contact'>
                            <a className='header-top__nav-link'>Контакты</a>
                        </Link>
                        <Link to='aboutUs'>
                            <a className='header-top__nav-link'>О нас</a>
                        </Link>
                        <Link to='delivery'>
                            <a className='header-top__nav-link'>Доставка</a>
                        </Link>
                        <Link to='security'>
                            <a className='header-top__nav-link'>
                                Политика безопасности
                            </a>
                        </Link>
                        <Link to='agrement'>
                            <a className='header-top__nav-link'>
                                Условия соглашения
                            </a>
                        </Link>
                    </nav>
                    <button className='header-top__btn'>Личный кабинет</button>
                </div>
                <div className='header-nav'>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>

                    <div className='header-nav__info'>
                        <div className='location'>
                            <p className='location-text'>Адрес магазина</p>
                            <span className='location-point'>г. Москва</span>
                        </div>

                        <a href='tel:+99899999999' className='contact'>
                            <div className='contact-text'>Главный офис</div>
                            <div className='contact-phone'>
                                +7 968 765-70-07
                            </div>
                        </a>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <Link to='/favourite'>
                                <img src={likeImg} alt='like' />
                            </Link>
                        </div>
                        <div>
                            <Link to='/cart'>
                                <img src={cartImg} alt='like' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='header_navigation'>
                    {navbarLink.map((el) => (
                        <Link
                            key={el.id}
                            to={el.link}
                            className='header-navigation__link'
                        >
                            {el.text}
                        </Link>
                    ))}
                </div>
                <div className='header-banner'>
                    <div className='header-banner__content'>
                        <h1 className='header-banner__title'>
                            Lorem ipsum dolor
                        </h1>
                        <p className='header-banner__text'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eos qui omnis, voluptatum harum ullam officiis
                            quaerat beatae excepturi. Maiores, natus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
