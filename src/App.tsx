import React, { FC } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Routes, Route } from 'react-router-dom';

import { CharactersPage } from './Pages/CharactersPage';
import Layout from './Layout/Layout';

export const App: FC = () => (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<CharactersPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
