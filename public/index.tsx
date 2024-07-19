import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import store from '../src/store';
import { App } from '../src/App';

import './styles.scss';

const rootElement = document.getElementById('root');

if (!rootElement) throw Error('root not found');

const root = createRoot(rootElement!);


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);