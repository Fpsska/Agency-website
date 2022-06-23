import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import GalleryTemplate from './GalleryTemplate';

import './gallery.scss';

// /. imports

const Gallery: React.FC = () => {

    const { galleryCards } = useAppSelector(state => state.gallerySlice);

    const [emptyStatus, setEmptyStatus] = useState<boolean>(false);

    useEffect(() => {
        if (galleryCards.length === 0) {
            setEmptyStatus(true);
        } else {
            setEmptyStatus(false);
        }
    }, [galleryCards]);

    return (
        <div className="gallery__body">
            {emptyStatus
                ?
                <h3 className="gallery__message">no matches</h3>
                :
                <div className="gallery__photos">
                    {galleryCards.map(item => {
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
                    })}</div>
            }
        </div>
    );
};

export default Gallery;