import React from 'react';

import { VscServerProcess } from 'react-icons/vsc';

// /. imports

const BlogPage: React.FC = () => {
    return (
        <div className="blog-page">
            <div className="blog-page__wrapper">
                <p className="message">Blog Page in progress</p>
                <VscServerProcess size={'42px'} />
            </div>
        </div>
    );
};

export default BlogPage;