import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import {
    filterGalleryByCategory,
    setSelectDefaultValue,
    setNavGalleryActiveStatus
} from '../../app/slices/gallerySlice';

// /. imports

interface propTypes {
    SelectDefaultValue: string;
    isDataLoading: boolean;
    error: string;
}

// /. interfaces

const NavSelect: React.FC<propTypes> = props => {
    const { SelectDefaultValue, isDataLoading, error } = props;

    const dispatch = useAppDispatch();

    // /. hooks

    const selectHandler = (value: string): void => {
        switch (value) {
            case value:
                dispatch(filterGalleryByCategory(value));
                dispatch(setSelectDefaultValue(value));
                dispatch(
                    setNavGalleryActiveStatus({ category: value, status: true })
                );
                break;
            default:
                dispatch(filterGalleryByCategory('all'));
                dispatch(setSelectDefaultValue('all'));
                dispatch(
                    setNavGalleryActiveStatus({ category: 'all', status: true })
                );
        }
    };

    // /. functions

    return (
        <select
            className="gallery__select"
            value={SelectDefaultValue}
            onChange={e => selectHandler(e.target.value)}
            disabled={isDataLoading || !!error}
        >
            <option
                className="gallery__select--item"
                value="all"
            >
                Show All
            </option>
            <option
                className="gallery__select--item"
                value="design"
            >
                Design
            </option>
            <option
                className="gallery__select--item"
                value="branding"
            >
                Branding
            </option>
            <option
                className="gallery__select--item"
                value="illustration"
            >
                illustration
            </option>
            <option
                className="gallery__select--item"
                value="motion"
            >
                Motion
            </option>
        </select>
    );
};

export default NavSelect;
