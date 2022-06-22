import React from 'react';

import './gallery.scss';

// /. imports

const Gallery: React.FC = () => {
    return (
        <div className="gallery__photos">
            <div className="gallery__card card active">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">KeyBoard</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
            <div className="gallery__card card">
                <div className="card__information">
                    <span className="card__tag">Design</span>
                    <span className="card__name">SOFA</span>
                </div>
            </div>
        </div>
    );
};

export default Gallery;