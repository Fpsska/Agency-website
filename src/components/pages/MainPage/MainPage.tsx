import React from 'react';

import Gallery from '../../Gallery/Gallery';

import './mainPage.scss';

// /. imports

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <div className="main-page__wrapper">

                <div className="gallery">

                    <div className="gallery__wrapper">

                        <nav className="gallery__nav nav">
                            <ul className="nav__menu">
                                <li className="nav__item">
                                    <a className="nav__link active" href="#">Show All</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Design</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Branding</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">illustration</a>
                                </li>
                                <li className="nav__item">
                                    <a className="nav__link" href="#">Motion</a>
                                </li>
                            </ul>
                        </nav>

                        <select className="gallery__select select" name="" id="" defaultValue="Show All">
                            <option className="select__item" value="">Show All</option>
                            <option className="select__item" value="">Design</option>
                            <option className="select__item" value="">Branding</option>
                            <option className="select__item" value="">illustration</option>
                            <option className="select__item" value="">Motion</option>
                        </select>

                        <Gallery />

                        <button className="gallery__button">Load More</button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MainPage;
