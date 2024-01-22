import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloComponent from './components/App';
import App from './components/contact-form';
import Menu from './components/menu/Menu';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    
    <App />
    <HelloComponent />
  </React.StrictMode>
);

