import React from 'react';

import { useAppSelector } from '../../app/hooks';

import { useWidthHandler } from '../../hooks/useWidthHandler';

import Nav from './Nav';
import NavSelect from './NavSelect';

// /. imports

interface propTypes {
    role: string;
}

// /. interfaces

const NavLayout: React.FC<propTypes> = ({ role }) => {
    const { SelectDefaultValue, isDataLoading, error } = useAppSelector(
        state => state.gallerySlice
    );

    const { isTabletWidth } = useWidthHandler();

    // /. hooks

    return (
        <>
            {isTabletWidth ? (
                <NavSelect
                    SelectDefaultValue={SelectDefaultValue}
                    isDataLoading={isDataLoading}
                    error={error}
                />
            ) : (
                <Nav role={role} />
            )}
        </>
    );
};

export default NavLayout;
