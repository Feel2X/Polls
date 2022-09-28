import React from 'react'
import ReactDOM from 'react-dom/client'

// custom components
import App from './App'

// external components
import { CookiesProvider } from "react-cookie"

// routing
import { BrowserRouter } from "react-router-dom"

// style
import './index.css'

// redux
import store from "./store/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <CookiesProvider>
              <Provider store={ store }>
                  <App />
              </Provider>
          </CookiesProvider>
      </BrowserRouter>
  </React.StrictMode>
)