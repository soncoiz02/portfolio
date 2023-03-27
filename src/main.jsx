import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MuiThemeProvider from './themes/MuiThemeProvider'
import './index.css'

import { inject } from '@vercel/analytics';

inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>
  ,
)
