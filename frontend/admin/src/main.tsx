import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'

import { BrowserRouter } from 'react-router'

import App from './App.tsx'
import './index.css'


const root: Root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
