import React from 'react';

import { Routes, Route } from 'react-router';

import Layout from '../common/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';
import ServicesPage from '../pages/ServicesPage/ServicesPage';
import PricingPage from '../pages/PricingPage/PricingPage';
import BlogPage from '../pages/BlogPage/BlogPage';

import '../../assets/styles/_style.scss';
import '../../assets/styles/_media.scss';
import './App.css';

// /. imports

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="Upiter-Task" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="Services" element={<ServicesPage />} />
          <Route path="Pricing" element={<PricingPage />} />
          <Route path="Blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
