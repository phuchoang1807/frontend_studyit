import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ÉP luôn light mode giống bản gốc
document.documentElement.classList.remove("dark");
document.documentElement.classList.add("light");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)