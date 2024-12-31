import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../node_modules/bootstrap/dist/css/bootstrap'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)