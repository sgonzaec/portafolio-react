import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Background from './Components/Background/Background.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SpeedInsights/>
    <Background />
    <App />
    <Analytics />
  </React.StrictMode>,
)
