import React from 'react';

// /. imports

interface propTypes {
    tag: string,
    text: string,
    image: string,
    isActive: boolean
}

const GalleryTemplate: React.FC<propTypes> = (props) => {

    const {
        tag,
        text,
        image,
        isActive
    } = props;

    return (
        <div className={`gallery__card card ${isActive ? 'active' : ''}`} >
            <div className="card__information">
                <span className="card__tag">{tag}</span>
                <span className="card__name">{text}</span>
            </div>
        </div>
    );
};

export default GalleryTemplate;