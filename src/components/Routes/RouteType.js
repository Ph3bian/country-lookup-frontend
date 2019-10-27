import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary'

const isAuthenticated = localStorage.getItem('countryToken') ? true : false

export const PrivateRoute = ({ page: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <ErrorBoundary>
                        <Component {...props} />
                    </ErrorBoundary>
                ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    )
}


export const PublicRoute = ({ page: Component, ...rest }) => (<Route
    {...rest}
    render={props =>
        !isAuthenticated ? (
            <ErrorBoundary>
                <Component {...props} />
            </ErrorBoundary>
        ) : (
                <Redirect to="/login" />
            )
    }
/>
)

