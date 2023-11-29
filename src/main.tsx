import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import Footer from './Components/Footer.tsx'
import Store from './Store/Store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>    
    <Navbar/>
    <App /> 
    <Footer/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
