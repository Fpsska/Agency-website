import React, { useEffect } from 'react';

import { fetchImagesData } from '../../../app/slices/gallerySlice';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import {
    filterGalleryByCategory,
    setNavGalleryActiveStatus,
    switchDataLoadingStatus
} from '../../../app/slices/gallerySlice';

import Gallery from '../../Gallery/Gallery';

import './mainPage.scss';

// /. imports

const MainPage: React.FC = () => {

    const { galleryNavTemplate, status } = useAppSelector(state => state.gallerySlice);

    const dispatch = useAppDispatch();

    const fetchNewData = (): void => {
        dispatch(fetchImagesData());
    };

    useEffect(() => {
        if (status === 'loading') {
            setTimeout(() => {
                dispatch(switchDataLoadingStatus(true));
            }, 2000);
        } else {
            setTimeout(() => {
                dispatch(switchDataLoadingStatus(false));
            }, 2000);
        }
    }, [status]);

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
                                {galleryNavTemplate.map(item => {
                                    return (
                                        <li className="nav__item" key={item.id}>
                                            <a className={item.isActive ? 'nav__link active' : 'nav__link'}
                                                href="#"
                                                onClick={() => {
                                                    dispatch(filterGalleryByCategory({ category: item.category }))
                                                    dispatch(setNavGalleryActiveStatus({ id: item.id, status: !item.isActive }))
                                                }}
                                            >
                                                {item.text}
                                            </a>
                                        </li>
                                    )
                                })}
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
