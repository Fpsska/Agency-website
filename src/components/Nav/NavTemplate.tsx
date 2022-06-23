import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';

import {
    filterGalleryByCategory,
    setNavGalleryActiveStatus
} from '../../app/slices/gallerySlice';

// /. imports

interface propTypes {
    id: string,
    text: string,
    category: string,
    isActive: boolean,
    role: string,
    isDataLoading: boolean,
    error: string
}

// /. interfaces

const NavTemplate: React.FC<propTypes> = (props) => {

    const {
        id,
        text,
        category,
        isActive,
        role,
        isDataLoading,
        error
    } = props;

    const dispatch = useAppDispatch();

    const linkHandle = (): void => {
        if (!isDataLoading && !Boolean(error)) {
            dispatch(filterGalleryByCategory({ category: category }));
            dispatch(setNavGalleryActiveStatus({ id: id, status: !isActive }));
        }
    };

    return (
        <li className="nav__item">
            {role === 'gallery-nav'
                ?
                <a className={`nav__link ${isActive ? 'active' : ''} ${isDataLoading || error ? 'disabled' : ''}`}
                    href="#"
                    onClick={linkHandle}
                >
                    {text}
                </a>
                :
                <NavLink className="nav__link" to="/">{text}</NavLink>
            }
        </li>
    );
};

export default NavTemplate;
