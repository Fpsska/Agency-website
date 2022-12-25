import React, { useState, useEffect, useRef } from 'react';

import { FaHamburger } from 'react-icons/fa';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { switchBurgerVisibleStatus } from '../../app/slices/headerSlice';

import { useWidthHandler } from '../../hooks/useWidthHandler';
import { useAreaHandler } from '../../hooks/useAreaHandler';

import logo from '../../assets/images/logo.svg';

import SectionInfo from '../SectionInfo/SectionInfo';
import NavLayout from '../Nav/NavLayout';
import Burger from '../Burger/Burger';

import './header.scss';

// /. imports

const Header: React.FC = () => {
    const { isBurgerVisible } = useAppSelector(state => state.headerSlice);
    const [burgerStyles, setBurgerStyles] = useState<{
        [key: string]: number | string;
    }>({
        height: 0,
        zIndex: -1
    });
    const [isScrollENDpoint, setScrollENDpointStatus] =
        useState<boolean>(false);

    const { isTabletWidth } = useWidthHandler();

    const { refEl, isVisible, setVisibleStatus } = useAreaHandler({
        initialStatus: true
    });

    const headerRef = useRef<HTMLDivElement>(null!);

    const dispatch = useAppDispatch();

    // /. hooks

    useEffect(() => {
        isBurgerVisible && isTabletWidth
            ? setBurgerStyles({ height: `${100}%`, zIndex: 5 })
            : setBurgerStyles({ height: 0 });
    }, [isBurgerVisible, isTabletWidth]);

    useEffect(() => {
        const onScrollHandler = (): void => {
            const { height } = window.getComputedStyle(headerRef.current);

            if (window.scrollY > parseInt(height, 10)) {
                setScrollENDpointStatus(true);
            } else {
                setScrollENDpointStatus(false);
            }
        };

        window.addEventListener('scroll', onScrollHandler);
        return () => {
            window.removeEventListener('scroll', onScrollHandler);
        };
    }, []);

    // /. effects

    return (
        <header
            className="header"
            ref={headerRef}
        >
            <section className="header__wrapper">
                <>
                    {!isBurgerVisible && isTabletWidth && (
                        <button
                            className="header__button header__button--burger"
                            onClick={() =>
                                dispatch(
                                    switchBurgerVisibleStatus({ status: true })
                                )
                            }
                        >
                            <FaHamburger
                                size={24}
                                color={isScrollENDpoint ? '#000' : '#fff'}
                                style={
                                    isScrollENDpoint
                                        ? { transform: 'rotate(180deg)' }
                                        : { transform: 'rotate(0)' }
                                }
                            />
                        </button>
                    )}
                </>

                <div
                    className="header__burger"
                    style={burgerStyles}
                >
                    <Burger
                        role={'page-nav'}
                        burgerRef={refEl}
                        isBurgerVisible={isVisible}
                        setBurgerVisibleStatus={setVisibleStatus}
                        isGLBurgerVisible={isBurgerVisible}
                        isTabletWidth={isTabletWidth}
                    />
                </div>

                <div className="header__bar">
                    <a
                        className="header__logo logo"
                        href="#"
                    >
                        <div className="logo__image">
                            <img
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <span className="logo__title">Agency</span>
                    </a>

                    <>
                        {!isBurgerVisible && !isTabletWidth && (
                            <NavLayout role={'page-nav'} />
                        )}
                    </>

                    <div className="header__contacts">
                        <button className="header__button header__button--contacts">
                            CONTACT
                        </button>
                    </div>
                </div>

                <SectionInfo />
            </section>
        </header>
    );
};

export default Header;
