import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateContextApiProvider } from './Components/contexApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateContextApiProvider>
      <App />
    </StateContextApiProvider>
  </React.StrictMode>
);

reportWebVitals();
