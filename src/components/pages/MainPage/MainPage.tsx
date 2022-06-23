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

                        <select className="gallery__select select" name="" id="" defaultValue="Show All">
                            <option className="select__item" value="">Show All</option>
                            <option className="select__item" value="">Design</option>
                            <option className="select__item" value="">Branding</option>
                            <option className="select__item" value="">illustration</option>
                            <option className="select__item" value="">Motion</option>
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
