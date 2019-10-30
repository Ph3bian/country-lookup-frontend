import React from 'react'
import { ToastProvider } from 'react-toast-notifications'
import PageRouter from './components/PageRouter'
import './App.scss'

function App() {
    return (
        <ToastProvider autoDismissTimeout={2000} autoDismiss={true}>
            <PageRouter />
        </ToastProvider>
    )
}

export default App
