import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.less';
import '@/test.js';
import store from '@/store/main';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>);