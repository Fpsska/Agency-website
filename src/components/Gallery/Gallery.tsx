import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { filter } from '../../helpers/filter';

import { galleryCardsTypes } from '../../Types/gallerySliceTypes';

import Preloader from '../../components/common/Preloader/Preloader';

import GalleryTemplate from './GalleryTemplate';

import './gallery.scss';

// /. imports

const Gallery: React.FC = () => {

    const { galleryCards, isDataLoading, error, filterBy } = useAppSelector(state => state.gallerySlice);

    const [emptyStatus, setEmptyStatus] = useState<boolean>(false);
    const [currentData, setCurrentData] = useState<galleryCardsTypes[]>(galleryCards);

    useEffect(() => {
        currentData.length === 0 ? setEmptyStatus(true) : setEmptyStatus(false);
    }, [currentData]);

    useEffect(() => {
        setCurrentData(filter(galleryCards, filterBy));
    }, [filterBy, galleryCards]);

    return (
        <div className="gallery__body">
            {isDataLoading ?
                <div className="gallery__preloader">
                    <Preloader />
                </div>
                :
                <div className="gallery__photos">
                    {currentData.map(item => {
                        return (
                            <GalleryTemplate
                                key={item.id}
                                {...item}
                            />
                        );
                    })}
                </div>
            }
            {
                !isDataLoading && error && <h3 className="error">Error: {error}</h3>
            }
            {
                !isDataLoading && !error && emptyStatus && <h3 className="gallery__message">no matches</h3>
            }
        </div>
    );
};

export default Gallery;