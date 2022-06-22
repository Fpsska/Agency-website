import React from 'react';

import { useAppSelector } from '../../app/hooks';

import GalleryTemplate from './GalleryTemplate';

import './gallery.scss';

// /. imports

const Gallery: React.FC = () => {

    const { galleryCards } = useAppSelector(state => state.gallerySlice);

    return (
        <div className="gallery__photos">
            {galleryCards.map(item => {
                return (
                    <GalleryTemplate
                    key={item.id}
                    tag={item.tag}
                    text={item.text}
                    image={item.image}
                    isActive={item.isActive}
                    />
                )
            })}
        </div>
    );
};

export default Gallery;