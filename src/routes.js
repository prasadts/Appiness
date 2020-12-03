import React from 'react'
const LoginPage = React.lazy(() => import('./components/Form/index'))
const Employee = React.lazy(() => import('./components/Employee/Employee'))

export const Routes = [
    { path: '/login', exact: true, component: LoginPage },
    { path: '/dashboard', exact: true, component: Employee }
]
