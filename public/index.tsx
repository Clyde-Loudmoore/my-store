import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import client from '../src/api/apollo/client';

import { App } from '../src/App';

import './styles.scss';

const rootElement = document.getElementById('root');

if (!rootElement) throw Error('root not found');

const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>
);