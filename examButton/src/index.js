import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './components/Button/Button';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
    <App />
    
  </React.StrictMode>
);

