import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {ContexFile} from './Components/ContexFile'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContexFile>
    <App />
    </ContexFile>
    </BrowserRouter>
  </React.StrictMode>,
)
