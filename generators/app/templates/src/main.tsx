import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'virtual:svg-icons-register'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)
root.render(<App />)
