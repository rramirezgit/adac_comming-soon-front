import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'pages/app'
import 'theme/colors.css'
import 'styles/globals.css'
import ThemeADAC from 'theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeADAC>
      <App />
    </ThemeADAC>
  </React.StrictMode>
)
