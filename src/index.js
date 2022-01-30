import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {GlobalProvider} from './context/provider';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);