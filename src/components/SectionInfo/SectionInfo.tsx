import React from 'react';

import './sectionInfo.scss';

// /. imports

const SectionInfo: React.FC = () => {
    return (
        <article className="section-info">
            <h1 className="section-info__title">Portfolio</h1>
            <p className="section-info__text">
                Agency provides a full service range including technical skills,
                design, business understanding.
            </p>
        </article>
    );
};

export default SectionInfo;
