import React, { useEffect, useState } from 'react'

import Login from 'pages/Login'
import Home from 'pages/Home'



const PageRouter = () => {
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        setAuth(localStorage.getItem('countryToken') ? true : false)
    },[])

  
    if (auth) {
        return <Home setAuth={setAuth} />
    }
    return <Login setAuth={setAuth} />
}

export default PageRouter
