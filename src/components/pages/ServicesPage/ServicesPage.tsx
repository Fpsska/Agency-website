import React from 'react';

import { VscServerProcess } from 'react-icons/vsc';

// /. imports

const ServicesPage: React.FC = () => {
    return (
        <section className="services-page">
            <div className="services-page__wrapper">
                <p className="message">Services Page in progress</p>
                <VscServerProcess size={'42px'} />
            </div>
        </section>
    );
};

export default ServicesPage;