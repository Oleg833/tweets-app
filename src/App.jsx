import React, { lazy } from 'react';
import { Layout } from './components/Layout/Layout';
import { Home } from 'pages/Home/Home';

import { Navigate, Route, Routes } from 'react-router-dom';

const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
