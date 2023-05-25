import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import MainRouter from './routes';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <MainRouter />

  </ChakraProvider>
);
reportWebVitals();
