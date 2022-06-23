import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import NavTemplate from './NavTemplate';

import './nav.scss';

// /. imports

interface propTypes {
    data: any,
    role: string
}

// /. interfaces

const Nav: React.FC<propTypes> = (props) => {

    const { data, role } = props;

    const { isDataLoading, error } = useAppSelector(state => state.gallerySlice);

    const [currentData, setCurrentData] = useState<any[]>(data);

    useEffect(() => {
        switch (role) {
            case 'header-nav':
                setCurrentData(data);
                break;
            case 'gallery-nav':
                setCurrentData(data);
                break;
        }
    }, [data, role]);

    return (
        <nav className={role === 'gallery-nav' ? 'gallery__nav nav' : 'nav'}>
            <ul className="nav__menu">
                {currentData.map(item => {
                    return (
                        <NavTemplate
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            category={item.category}
                            isActive={item.isActive}
                            role={role}
                            isDataLoading={isDataLoading}
                            error={error}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
