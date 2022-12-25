import React, { useEffect } from 'react';

import { CgCloseR } from 'react-icons/cg';

import { useAppDispatch } from '../../app/hooks';

import { switchBurgerVisibleStatus } from '../../app/slices/headerSlice';

import Nav from '../Nav/Nav';

import './burger.scss';

// /. imports

interface propTypes {
    role: string;
    burgerRef: string;
    isBurgerVisible: boolean;
    setBurgerVisibleStatus: (arg: boolean) => void;
    isGLBurgerVisible: boolean;
    isTabletWidth: boolean;
}

// /. interfaces

const Burger: React.FC<propTypes> = props => {
    const {
        role,
        burgerRef,
        isBurgerVisible,
        setBurgerVisibleStatus,
        isGLBurgerVisible
    } = props;

    const dispatch = useAppDispatch();

    // /. hooks

    const closeBurger = (e: any): void => {
        e.stopPropagation();
        dispatch(switchBurgerVisibleStatus({ status: false }));
    };

    // /. functions

    useEffect(() => {
        isGLBurgerVisible
            ? setBurgerVisibleStatus(true)
            : setBurgerVisibleStatus(false);
    }, [isGLBurgerVisible]);

    useEffect(() => {
        !isBurgerVisible &&
            dispatch(switchBurgerVisibleStatus({ status: false }));
    }, [isBurgerVisible]);

    // /. effects

    return (
        <div
            className="burger"
            ref={burgerRef}
        >
            <div className="burger__wrapper">
                <button
                    className="burger__button"
                    onClick={e => closeBurger(e)}
                >
                    <CgCloseR
                        size={18}
                        color={'#fff'}
                    />
                </button>
                <Nav role={role} />
            </div>
        </div>
    );
};

export default Burger;
