import React from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../app/hooks';

import {
    filterGalleryByCategory,
    setNavGalleryActiveStatus
} from '../../app/slices/gallerySlice';

// /. imports

interface propTypes {
    text: string,
    href: string,
    category: string,
    isActive: boolean,
    role: string,
    isDataLoading: boolean,
    error: string
}

// /. interfaces

const NavTemplate: React.FC<propTypes> = (props) => {

    const {
        text,
        href,
        category,
        isActive,
        role,
        isDataLoading,
        error
    } = props;

    const dispatch = useAppDispatch();

    const linkHandler = (): void => {
        if (!isDataLoading && !Boolean(error)) {
            dispatch(setNavGalleryActiveStatus({ category: category, status: true }));
            dispatch(filterGalleryByCategory(category));
        }
    };

    return (
        <li className="nav__item">
            {role === 'gallery-nav'
                ?
                <a className={`nav__link ${isActive ? 'active' : ''} ${isDataLoading || error ? 'disabled' : ''}`}
                    href="#"
                    onClick={linkHandler}
                >
                    {text}
                </a>
                :
                <NavLink className="nav__link" to={href}>{text}</NavLink>
            }
        </li>
    );
};

export default NavTemplate;
