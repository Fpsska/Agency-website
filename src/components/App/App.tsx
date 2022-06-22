import React from 'react';

import { Routes, Route } from 'react-router';

import Layout from '../common/Layout/Layout';
import MainPage from '../pages/MainPage/MainPage';

import '../../assets/styles/_style.scss';
import '../../assets/styles/_media.scss';
import './App.css';

// /. imports

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
