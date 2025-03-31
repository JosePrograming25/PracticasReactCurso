import ReactDom from 'react-dom/client'
import App from './App'
import './index.css'
import { StrictMode } from 'react'

const root = document.getElementById('root')
ReactDom.createRoot(root).render(<StrictMode><App /></StrictMode>)
