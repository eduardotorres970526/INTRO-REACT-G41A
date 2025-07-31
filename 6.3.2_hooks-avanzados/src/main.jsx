import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterGame from './CounterGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterGame />
  </StrictMode>,
)
