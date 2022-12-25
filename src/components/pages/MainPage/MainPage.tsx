import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
    filterGalleryByCategory,
    switchDataLoadingStatus,
    setNavGalleryActiveStatus
} from '../../../app/slices/gallerySlice';

import { fetchImagesData } from '../../../app/api/fetchImagesData';

import Gallery from '../../Gallery/Gallery';
import NavLayout from '../../Nav/NavLayout';

import './mainPage.scss';

// /. imports

const MainPage: React.FC = () => {
    const { galleryNavTemplate, status, error, isDataLoading } = useAppSelector(
        state => state.gallerySlice
    );

    const dispatch = useAppDispatch();

    // /. hooks

    const fetchNewData = (): void => {
        dispatch(fetchImagesData());
        dispatch(filterGalleryByCategory('all'));
        dispatch(setNavGalleryActiveStatus({ category: 'all', status: true }));
    };

    // /. functions

    useEffect(() => {
        if (status !== 'loading') {
            setTimeout(() => {
                dispatch(switchDataLoadingStatus(false));
            }, 2000);
        }
    }, [status]);

    // /. effects

    return (
        <section className="main-page">
            <div className="main-page__wrapper">
                <div className="gallery">
                    <div className="gallery__wrapper">
                        <NavLayout role={'gallery-nav'} />

                        <Gallery />

                        <button
                            className="gallery__button"
                            disabled={isDataLoading || !!error}
                            onClick={fetchNewData}
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainPage;
