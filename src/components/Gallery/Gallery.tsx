import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import Preloader from '../../components/common/Preloader/Preloader';

import GalleryTemplate from './GalleryTemplate';

import './gallery.scss';

// /. imports

const Gallery: React.FC = () => {

    const { galleryCards, isDataLoading, error, filterBy } = useAppSelector(state => state.gallerySlice);

    const [emptyStatus, setEmptyStatus] = useState<boolean>(false);

    useEffect(() => {
        if (galleryCards.length === 0) {
            setEmptyStatus(true);
        } else {
            setEmptyStatus(false);
        }
    }, [galleryCards]);

    const filterData = () => {
        switch (filterBy) {
            case 'all':
                return galleryCards;
            case 'design':
                return galleryCards.filter((item: any) => item.category.toLocaleLowerCase() === 'design');
            case 'branding':
                return galleryCards.filter((item: any) => item.category.toLocaleLowerCase() === 'branding');
            case 'illustration':
                return galleryCards.filter((item: any) => item.category.toLocaleLowerCase() === 'illustration');
            case 'motion':
                return galleryCards.filter((item: any) => item.category.toLocaleLowerCase() === 'motion');
            default:
                return galleryCards;
        };
    };

    return (
        <div className="gallery__body">
            {isDataLoading ?
                <div className="gallery__preloader">
                    <Preloader />
                </div>
                :
                <div className="gallery__photos">
                    {filterData().map(item => {
                        return (
                            <GalleryTemplate
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                text={item.text}
                                image={item.image}
                                isActive={item.isActive}
                            />
                        );
                    })}
                </div>
            }
            {
                !isDataLoading && error && <h3 className="error">Error: {error}</h3>
            }
            {
                !isDataLoading && !error && emptyStatus ? <h3 className="gallery__message">no matches</h3> : <></>
            }
        </div>
    );
};

export default Gallery;