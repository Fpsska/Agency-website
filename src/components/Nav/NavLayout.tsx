import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import Nav from './Nav';
import NavSelect from './NavSelect';

interface propTypes {
    role: string
}

const NavLayout: React.FC<propTypes> = ({ role }) => {

    const {
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
                <>
                    {role === 'page-nav' ?
                        <div className="burger">
                            <Nav
                                role={role}
                            />
                        </div>
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