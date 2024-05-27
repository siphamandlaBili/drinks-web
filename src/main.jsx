import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "react-toastify/dist/ReactToastify.css"
import './index.css';
import { ToastContainer } from 'react-toastify';




ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <ToastContainer autoClose = {2000} position='top-center'/>
  <App />
  </>
  
);
