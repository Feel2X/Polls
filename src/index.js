import React from 'react'
import ReactDOM from 'react-dom/client'

// custom components
import App from './App'

// style
import './index.css'

// redux
import store from "./store/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <Provider store={ store }>
          <App />
      </Provider>
  </React.StrictMode>
)