import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Navbar />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
