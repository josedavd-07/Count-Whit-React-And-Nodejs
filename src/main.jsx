import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContadorApp } from './ContadorApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContadorApp />
  </StrictMode>,
)
