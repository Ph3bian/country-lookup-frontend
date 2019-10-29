import React, { useEffect, useState } from 'react'

import Login from '../../pages/Login'
import Home from '../../pages/Home'
import Loader from '../Loader'

const PageRouter = () => {
    const [auth, setAuth] = useState(false)
    const [view, setView] = useState(<Loader />)

    useEffect(() => {
        setAuth(localStorage.getItem('countryToken') ? true : false)
    }, [setAuth])

    useEffect(() => {
        auth ? setView(<Home />) : setView(<Login />)
    }, [auth, setView])
    return view
}

export default PageRouter
