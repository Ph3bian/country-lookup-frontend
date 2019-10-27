import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastProvider} from 'react-toast-notifications'
import Routes from './components/Routes'
import './App.scss'

function App() {
    return (
        <BrowserRouter>
         <ToastProvider>
            <Routes />
            </ToastProvider>
        </BrowserRouter>
    )
}

export default App
