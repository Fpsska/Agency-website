import React from 'react';

// /. imports

interface propTypes {
    category: string,
    text: string,
    image: string,
    isActive: boolean
}

const GalleryTemplate: React.FC<propTypes> = (props) => {

    const {
        category,
        text,
        image,
        isActive
    } = props;

    return (
        <div className={`gallery__card card ${isActive ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }} >
            <div className="card__information">
                <span className="card__tag">{category}</span>
                <span className="card__name" title={text}>{text}</span>
            </div>
        </div>
    );
};

export default GalleryTemplate;