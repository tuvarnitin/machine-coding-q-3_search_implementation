import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostContextProvider from './context/PostContextProvider.jsx'

createRoot(document.getElementById('root')).render(
 <PostContextProvider>
   <App />
 </PostContextProvider>
)
