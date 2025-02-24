import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';

import { BrowserRouter } from 'react-router';

import { Provider } from 'react-redux'
import { store } from './store.ts'

import App from './App.tsx';
import './index.css';


const root: Root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
