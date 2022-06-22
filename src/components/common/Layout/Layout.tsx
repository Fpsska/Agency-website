import React from 'react';

import { Outlet } from 'react-router';

// /. imports

const Layout: React.FC = () => {
    return (
        <div className="page">
            <header className="header">HEADER</header>
            <main className="main">
                <Outlet/>
            </main>
            <footer className="footer">FOOTER</footer>
        </div>
    );
};

export default Layout;


