import { FC } from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Routes, Route } from 'react-router-dom';


import CatalogPage from './Pages/CatalogPage';
import CartPage from './Pages/CartPage';
import Layout from './components/Layout';

export const App: FC = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<CatalogPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
