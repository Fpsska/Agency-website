import React from 'react';

import { useAppDispatch } from '../../app/hooks';

import { setCardActiveStatus, filterGalleryByCategory } from '../../app/slices/gallerySlice';

// /. imports

interface propTypes {
    id: string,
    category: string,
    text: string,
    image: string,
    isActive: boolean
}

const GalleryTemplate: React.FC<propTypes> = (props) => {

    const {
        id,
        category,
        text,
        image,
        isActive
    } = props;

    const dispatch = useAppDispatch();

    const cardHandler = (): void => {
        dispatch(setCardActiveStatus({ id: id, status: !isActive }));
    };

    return (
        <div className={`gallery__card card ${isActive ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={cardHandler}
        >
            <div className="card__information">
                <span className="card__tag"
                    onClick={() => { dispatch(filterGalleryByCategory({ category: category.toLocaleLowerCase() })); }}
                >
                    {category}
                </span>
                <span className="card__name" title={text}>{text}</span>
            </div>
        </div>
    );
};

export default GalleryTemplate;