import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'       // Solution avec signal
import App2 from './App2.jsx'   // Solution avec useState

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
