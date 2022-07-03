import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {CartContextProvider} from './context/cartcontext'
import {ChakraProvider} from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
          <CartContextProvider>
       <App />
    </CartContextProvider>
    </ChakraProvider>
    </BrowserRouter>    
  </React.StrictMode>
);

reportWebVitals();
