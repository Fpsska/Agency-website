import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import NavTemplate from './NavTemplate';

import './nav.scss';

// /. imports

interface propTypes {
    role: string;
}

// /. interfaces

const Nav: React.FC<propTypes> = props => {
    const { role } = props;

    const { isDataLoading, error, galleryNavTemplate } = useAppSelector(
        state => state.gallerySlice
    );
    const { headerNavTemplates } = useAppSelector(state => state.headerSlice);

    const [currentData, setCurrentData] = useState<any[]>([]);

    // /. hooks

    useEffect(() => {
        switch (role) {
            case 'page-nav':
                setCurrentData(headerNavTemplates);
                break;
            case 'gallery-nav':
                setCurrentData(galleryNavTemplate);
                break;
        }
    }, [role, headerNavTemplates, galleryNavTemplate]);

    // /. effects

    return (
        <nav className={role === 'gallery-nav' ? 'gallery__nav nav' : 'nav'}>
            <ul className="nav__menu">
                {currentData.map(item => {
                    return (
                        <NavTemplate
                            key={item.id}
                            {...item}
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
