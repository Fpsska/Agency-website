import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { filterGalleryByCategory, setSelectDefaultValue } from '../../app/slices/gallerySlice';


interface propTypes {
    SelectDefaultValue: string,
    isDataLoading: boolean,
    error: string
}

const NavSelect: React.FC<propTypes> = (props) => {

    const {
        SelectDefaultValue,
        isDataLoading,
        error
    } = props;

    const dispatch = useAppDispatch();

    const selectHandler = (value: string): void => {
        switch (value) {
            case 'all':
                dispatch(filterGalleryByCategory(value));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'design':
                dispatch(filterGalleryByCategory(value));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'branding':
                dispatch(filterGalleryByCategory(value));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'illustration':
                dispatch(filterGalleryByCategory(value));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'motion':
                dispatch(filterGalleryByCategory(value));
                dispatch(setSelectDefaultValue(value));
                break;
        }
    };

    return (
        <select className="nav__select"
            value={SelectDefaultValue}
            onChange={(e) => selectHandler(e.target.value)}
            disabled={isDataLoading || !!error}
        >
            <option className="nav__select--item" value="all">Show All</option>
            <option className="nav__select--item" value="design">Design</option>
            <option className="nav__select--item" value="branding">Branding</option>
            <option className="nav__select--item" value="illustration">illustration</option>
            <option className="nav__select--item" value="motion">Motion</option>
        </select>
    );
};

export default NavSelect;