import React from 'react';

import { useAppSelector } from '../../app/hooks';

import logo from '../../assets/images/logo.svg';

import SectionInfo from '../SectionInfo/SectionInfo';
import Nav from '../Nav/Nav';

import './header.scss';

// /. imports

const Header: React.FC = () => {

    const { headerNavTemplates } = useAppSelector(state => state.headerSlice);

    return (
        <header className="header">
            <section className="header__wrapper">

                <div className="header__bar">
                    <a className="header__logo" href="#">
                        <img className="header__image" src={logo} alt="logo" />
                        <h2 className="header__title">Agency</h2>
                    </a>

                    <Nav data={headerNavTemplates} role={'header-nav'} />

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
