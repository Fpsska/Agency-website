import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { useAreaHandler } from '../../hooks/useAreaHandler';

import Burger from '../Burger/Burger';

import Nav from './Nav';
import NavSelect from './NavSelect';

// /. imports

interface propTypes {
    role: string
}

// /. interfaces

const NavLayout: React.FC<propTypes> = ({ role }) => {

    const {
        SelectDefaultValue,
        isDataLoading,
        error
    } = useAppSelector(state => state.gallerySlice);

    const { isBurgerVisible } = useAppSelector(state => state.headerSlice);

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [breakpoint] = useState<number>(768);

    const { refEl, isVisible, setVisibleStatus } = useAreaHandler({ initialStatus: true });

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <>
            {width <= breakpoint ?
                <>
                    {role === 'page-nav' ?
                        <Burger
                            role={role}
                            burgerRef={refEl}
                            isBurgerVisible={isVisible}
                            setBurgerVisibleStatus={setVisibleStatus}
                            isGLBurgerVisible={isBurgerVisible}
                        />
                        :
                        <NavSelect
                            SelectDefaultValue={SelectDefaultValue}
                            isDataLoading={isDataLoading}
                            error={error}
                        />
                    }
                </>
                :
                <Nav
                    role={role}
                />
            }
        </>
    );
};

export default NavLayout;