import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import Nav from './Nav';
import NavSelect from './NavSelect';

const NavLayout: React.FC = () => {

    const {
        galleryNavTemplate,
        SelectDefaultValue,
        isDataLoading,
        error
    } = useAppSelector(state => state.gallerySlice);

    const [width, setWidth] = useState<number>(window.innerWidth);
    const [breakpoint] = useState<number>(768);

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
                <NavSelect
                    SelectDefaultValue={SelectDefaultValue}
                    isDataLoading={isDataLoading}
                    error={error}
                />
                :
                <Nav
                    data={galleryNavTemplate}
                    role={'gallery-nav'}
                />
            }
        </>
    );
};

export default NavLayout;