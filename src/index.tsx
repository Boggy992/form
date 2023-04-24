import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormProvider from './context/form.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
