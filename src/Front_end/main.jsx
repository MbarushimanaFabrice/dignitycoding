 import React from 'react';
 import App from './App.jsx';
import ReactDOM from 'react-dom/client'
import './Styles.css'
import { BrowserRouter } from "react-router-dom"
import global_kin from './cms/translations/Kin/global.json'
import global_en from './cms/translations/en/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next';
i18next.init({
  interpolation:{escapeValues:false},
  lng:"en",
  resources:{
    en:{
      global:global_en
    },
    kin:{
      global:global_kin
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
      <I18nextProvider i18n={i18next}> 
        <App />
      </I18nextProvider>
       
      </BrowserRouter>
      
     </>
  </React.StrictMode>,
)
