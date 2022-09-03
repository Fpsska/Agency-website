import React, { useEffect } from 'react';

import { Outlet } from 'react-router';

import { useAppDispatch } from '../../../app/hooks';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Alert from '../../Alret/Alert';

import { fetchImagesData } from '../../../app/api/fetchImagesData';

// /. imports

const Layout: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchImagesData());
    }, []);

    return (
        <div className="page">
            <Alert />
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;


