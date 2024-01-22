
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/dom2';
import App2 from './components/App2';
import App3 from './components/App3';
import Input from './components/input';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
    <Input />
  </React.StrictMode>
);


