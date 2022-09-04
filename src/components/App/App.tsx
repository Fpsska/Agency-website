import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router';

import Layout from '../common/Layout/Layout';

import '../../assets/styles/_style.scss';
import '../../assets/styles/_media.scss';
import './App.css';

// /. imports

const MainPageLazy = lazy(() => import('../pages/MainPage/MainPage'));
const ServicesPageLazy = lazy(() => import('../pages/ServicesPage/ServicesPage'));
const PricingPageLazy = lazy(() => import('../pages/PricingPage/PricingPage'));
const BlogPageLazy = lazy(() => import('../pages/BlogPage/BlogPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="Jupiter-Task" element={<Layout />}>
          <Route index element={
            <Suspense>
              <MainPageLazy />
            </Suspense>} />
          <Route path="Services" element={
            <Suspense>
              <ServicesPageLazy />
            </Suspense>
          } />
          <Route path="Pricing" element={
            <Suspense>
              <PricingPageLazy />
            </Suspense>
          } />
          <Route path="Blog" element={
            <Suspense>
              <BlogPageLazy />
            </Suspense>
          } />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
