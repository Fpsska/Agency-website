import React from 'react';

import { BsGithub } from 'react-icons/bs';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__social">
                    <a className="footer__link" target="_blank" href="https://github.com/Fpsska">
                        <BsGithub size={'34px'} color={'#000'} />
                        <span className="footer__text">Fpsska</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
