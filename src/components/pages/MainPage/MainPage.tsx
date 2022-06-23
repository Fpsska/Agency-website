import React from 'react';

import { fetchImagesData } from '../../../app/slices/gallerySlice';

import { useAppDispatch } from '../../../app/hooks';

import { filterGalleryByCategory } from '../../../app/slices/gallerySlice';

import Gallery from '../../Gallery/Gallery';

import './mainPage.scss';

// /. imports

const MainPage: React.FC = () => {

    const dispatch = useAppDispatch();

    const fetchNewData = (): void => {
        dispatch(fetchImagesData());
    };

    const handleSelect = (value: string): void => {
        switch (value) {
            case 'all':
                dispatch(filterGalleryByCategory({ category: value }));
                break;
            case 'design':
                dispatch(filterGalleryByCategory({ category: value }));
                break;
            case 'branding':
                dispatch(filterGalleryByCategory({ category: value }));
                break;
            case 'illustration':
                dispatch(filterGalleryByCategory({ category: value }));
                break;
            case 'motion':
                dispatch(filterGalleryByCategory({ category: value }));
                break;
        }
    };

    return (
        <div className="main-page">
            <div className="main-page__wrapper">

                <div className="gallery">

                    <div className="gallery__wrapper">

                        <nav className="gallery__nav nav">
                            <ul className="nav__menu">
                                <li className="nav__item">
                                    <a className="nav__link active" href="#" onClick={() => dispatch(filterGalleryByCategory({ category: 'all' }))}>Show All</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#" onClick={() => dispatch(filterGalleryByCategory({ category: 'design' }))}>Design</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#" onClick={() => dispatch(filterGalleryByCategory({ category: 'branding' }))}>Branding</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#" onClick={() => dispatch(filterGalleryByCategory({ category: 'illustration' }))}>illustration</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#" onClick={() => dispatch(filterGalleryByCategory({ category: 'motion' }))}>Motion</a>
                                </li>
                            </ul>
                        </nav>

                        <select className="gallery__select select"
                            defaultValue="Show All"
                            onChange={(e) => handleSelect(e.target.value)}
                        >
                            <option className="select__item" value="all">Show All</option>
                            <option className="select__item" value="design">Design</option>
                            <option className="select__item" value="branding">Branding</option>
                            <option className="select__item" value="illustration">illustration</option>
                            <option className="select__item" value="motion">Motion</option>
                        </select>

                        <Gallery />

                        <button className="gallery__button" onClick={fetchNewData}>Load More</button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainPage;
