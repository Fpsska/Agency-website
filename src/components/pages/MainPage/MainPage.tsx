import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
    fetchImagesData,
    filterGalleryByCategory,
    switchDataLoadingStatus,
    setNavGalleryActiveStatus,
    setSelectDefaultValue
} from '../../../app/slices/gallerySlice';

import Gallery from '../../Gallery/Gallery';
import Nav from '../../Nav/Nav';

import './mainPage.scss';

// /. imports

const MainPage: React.FC = () => {

    const {
        galleryNavTemplate,
        status,
        error,
        isDataLoading,
        SelectDefaultValue
    } = useAppSelector(state => state.gallerySlice);

    const dispatch = useAppDispatch();

    const fetchNewData = (): void => {
        dispatch(fetchImagesData());
        dispatch(filterGalleryByCategory({ category: 'all' }));
        dispatch(setNavGalleryActiveStatus({ category: 'all', status: true }));
    };

    useEffect(() => {
        if (status !== 'loading') {
            setTimeout(() => {
                dispatch(switchDataLoadingStatus(false));
            }, 2000);
        }
    }, [status]);

    const selectHandler = (value: string): void => {
        switch (value) {
            case 'all':
                dispatch(filterGalleryByCategory({ category: value }));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'design':
                dispatch(filterGalleryByCategory({ category: value }));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'branding':
                dispatch(filterGalleryByCategory({ category: value }));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'illustration':
                dispatch(filterGalleryByCategory({ category: value }));
                dispatch(setSelectDefaultValue(value));
                break;
            case 'motion':
                dispatch(filterGalleryByCategory({ category: value }));
                dispatch(setSelectDefaultValue(value));
                break;
        }
    };

    return (
        <div className="main-page">
            <div className="main-page__wrapper">

                <div className="gallery">

                    <div className="gallery__wrapper">

                        <Nav data={galleryNavTemplate} role={'gallery-nav'} />

                        <select className="gallery__select select"
                            value={SelectDefaultValue}
                            onChange={(e) => selectHandler(e.target.value)}
                            disabled={isDataLoading || !!error}
                        >
                            <option className="select__item" value="all">Show All</option>
                            <option className="select__item" value="design">Design</option>
                            <option className="select__item" value="branding">Branding</option>
                            <option className="select__item" value="illustration">illustration</option>
                            <option className="select__item" value="motion">Motion</option>
                        </select>

                        <Gallery />

                        <button className="gallery__button" disabled={isDataLoading || !!error} onClick={fetchNewData}>Load More</button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainPage;
