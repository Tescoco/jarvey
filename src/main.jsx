import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.jsx'
import Index from './store/Index.js'

import './assets/scss/style.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Index}>
      <App />
    </Provider>
  </StrictMode>,
)
