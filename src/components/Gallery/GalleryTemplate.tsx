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
    id: string;
    category: string;
    text: string;
    image: string;
    alt_description: string;
    isActive: boolean;
}

// /. interfaces

const GalleryTemplate: React.FC<propTypes> = props => {
    const { id, category, text, image, alt_description, isActive } = props;

    const dispatch = useAppDispatch();

    // /. hooks

    const cardHandler = (): void => {
        dispatch(setCardActiveStatus({ id: id, status: !isActive }));
    };

    const cardCategoryHandler = (): void => {
        dispatch(filterGalleryByCategory(category.toLocaleLowerCase()));
        dispatch(
            setNavGalleryActiveStatus({
                category: category.toLocaleLowerCase(),
                status: !isActive
            })
        );
        dispatch(setSelectDefaultValue(category.toLocaleLowerCase()));
    };

    // /. functions

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

    // /. effects

    return (
        <div
            className={`gallery__card card ${isActive ? 'active' : ''}`}
            onClick={cardHandler}
        >
            <img
                className="card__image"
                src={image}
                alt={alt_description}
            />
            <div className="card__information">
                <span
                    className="card__category"
                    onClick={cardCategoryHandler}
                >
                    {category}
                </span>
                <blockquote
                    className="card__name"
                    title={text}
                    cite="https://unsplash.com/"
                >
                    <p>{text}</p>
                </blockquote>
            </div>
        </div>
    );
};

export default GalleryTemplate;
