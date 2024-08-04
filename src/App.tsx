import React, { FC } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Routes, Route } from 'react-router-dom';

import { CatalogPage } from './Pages/CatalogPage';
import Layout from './Layout/Layout';

export const App: FC = () => (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<CatalogPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
