import React, { useEffect } from 'react';

import { useAppDispatch } from '../../app/hooks';

import {
    setCardActiveStatus,
    filterGalleryByCategory,
    deleteGalleryTemplate,
    setNavGalleryActiveStatus,
    setSelectDefaultValue
} from '../../app/slices/gallerySlice';

// /. imports

interface propTypes {
    id: string,
    category: string,
    text: string,
    image?: string,
    isActive: boolean
}

// /. interfaces

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

    const cardCategoryHandler = (): void => {
        dispatch(filterGalleryByCategory(category.toLocaleLowerCase()));
        dispatch(setNavGalleryActiveStatus({ category: category.toLocaleLowerCase(), status: !isActive }));
        dispatch(setSelectDefaultValue(category.toLocaleLowerCase()));
    };

    useEffect(() => {
        const deleteCard = (e: any): void => {
            if (isActive && e.code === 'Delete') {
                dispatch(deleteGalleryTemplate());
            }
        };

        document.addEventListener('keydown', deleteCard);
        return () => {
            document.removeEventListener('keydown', deleteCard);
        };
    }, [isActive]);

    return (
        <div className={`gallery__card card ${isActive ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            onClick={cardHandler}
        >
            <div className="card__information">
                <span className="card__category"
                    onClick={cardCategoryHandler}
                >
                    {category}
                </span>
                <blockquote className="card__name" title={text} cite="https://unsplash.com/">
                    <p>{text}</p>
                </blockquote>
            </div>
        </div>
    );
};

export default GalleryTemplate;