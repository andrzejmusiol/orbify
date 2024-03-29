import React from 'react'
import ReactDOM from 'react-dom/client'
import Wizard from './features/wizard/Wizard'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Wizard />
  </React.StrictMode>
)
