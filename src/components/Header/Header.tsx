import React from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';

import SectionInfo from '../SectionInfo/SectionInfo';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">

                <div className="header__bar">
                    <a className="header__logo" href="#">
                        <img className="header__image" src={logo} alt="logo" />
                        <h2 className="header__title">Agency</h2>
                    </a>

                    <nav className="nav">
                        <ul className="nav__menu">
                            <li className="nav__item">
                                <NavLink className="nav__link" to="/">About</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link" to="/">Services</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link" to="/">Pricing</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link" to="/">Blog</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__contacts">
                        <button className="header__button">CONTACT</button>
                    </div>
                </div>

                <SectionInfo />

            </div>
        </header>
    );
};

export default Header;
