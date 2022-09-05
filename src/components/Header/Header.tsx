import React from 'react';

import { FaHamburger } from 'react-icons/fa';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchBurgerVisibleStatus } from '../../app/slices/headerSlice';

import { useWidthHandler } from '../../hooks/useWidthHandler';

import logo from '../../assets/images/logo.svg';

import SectionInfo from '../SectionInfo/SectionInfo';
import NavLayout from '../Nav/NavLayout';

import './header.scss';

// /. imports

const Header: React.FC = () => {

    const { isBurgerVisible } = useAppSelector(state => state.headerSlice);

    const { isTabletWidth } = useWidthHandler();

    const dispatch = useAppDispatch();

    return (
        <header className="header">
            <section className="header__wrapper">

                <>
                    {!isBurgerVisible && isTabletWidth &&
                        <button className="header__button header__button--burger"
                            onClick={() => dispatch(switchBurgerVisibleStatus({ status: true }))}>
                            <FaHamburger size={24} />
                        </button>}
                </>

                <div className="header__bar">
                    <a className="header__logo" href="#">
                        <img className="header__image" src={logo} alt="logo" />
                        <h2 className="header__title">Agency</h2>
                    </a>

                    <NavLayout role={'page-nav'} />

                    <div className="header__contacts">
                        <button className="header__button header__button--contacts">CONTACT</button>
                    </div>
                </div>

                <SectionInfo />

            </section>
        </header>
    );
};

export default Header;
