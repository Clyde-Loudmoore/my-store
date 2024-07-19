import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'


import Header from './components/Header';
import CatalogPage from './Pages/CatalogPage';

export const App: FC = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Header />
      <Routes>
        <Route path='/' element={<CatalogPage />} />
      </Routes>
    </ThemeProvider>
  );
}
