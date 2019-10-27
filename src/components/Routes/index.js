import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../Loader'
import { Redirect, Switch } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from './RouteType'

const AsyncHome = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ '../../pages/Home'),
    loading: Loading
})

const AsyncLogin = Loadable({
    loader: () => import(/* webpackChunkName: "Home" */ '../../pages/Login'),
    loading: Loading
})

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute exact page={AsyncHome} path="/" />
            <PublicRoute page={AsyncLogin} path="/Login" />
            <PrivateRoute path="/" exact page={() => <Redirect to="/" />} />

        </Switch>
    )
}

export default Routes
