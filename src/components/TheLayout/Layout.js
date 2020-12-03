import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Routes } from '../../routes'
const Layout = () => {
    const loading = "Loading..."
    return (
        <BrowserRouter>
            <Suspense fallback={loading}>
                <Switch>
                    {Routes.map((i, idx) => {
                        return i.component && (
                            <Route
                                key={idx}
                                path={i.path}
                                exact={i.exact}
                                render={props => (
                                    <i.component {...props} />
                                )}
                            />
                        )
                    })}
                    <Redirect from='/' to='/login' />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
export default React.memo(Layout)