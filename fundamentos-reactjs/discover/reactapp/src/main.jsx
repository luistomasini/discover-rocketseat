import React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/global.css'

import { Home } from './pages/Home'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
