import React, { useState, useEffect } from 'react';

import { FaHamburger } from 'react-icons/fa';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchBurgerVisibleStatus } from '../../app/slices/headerSlice';

import logo from '../../assets/images/logo.svg';

import SectionInfo from '../SectionInfo/SectionInfo';
import NavLayout from '../Nav/NavLayout';


import './header.scss';

// /. imports

const Header: React.FC = () => {

    const { isBurgerVisible } = useAppSelector(state => state.headerSlice);

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [breakpoint] = useState<number>(768);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const dispatch = useAppDispatch();

    return (
        <header className="header">
            <section className="header__wrapper">

                <>
                    {!isBurgerVisible && width <= breakpoint &&
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
