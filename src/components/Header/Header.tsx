import React from 'react';

import logo from '../../assets/images/logo.svg';

import SectionInfo from '../SectionInfo/SectionInfo';
import NavLayout from '../Nav/NavLayout';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    return (
        <header className="header">
            <section className="header__wrapper">

                <div className="header__bar">
                    <a className="header__logo" href="#">
                        <img className="header__image" src={logo} alt="logo" />
                        <h2 className="header__title">Agency</h2>
                    </a>

                    <NavLayout role={'page-nav'} />

                    <div className="header__contacts">
                        <button className="header__button">CONTACT</button>
                    </div>
                </div>

                <SectionInfo />

            </section>
        </header>
    );
};

export default Header;
