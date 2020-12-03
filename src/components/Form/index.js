import React from 'react'
import { toast } from 'react-toastify';
import { ERROR_MSG, MSG, NOTE, PRE_EMAIL, PRE_PASSWORD } from '../../Constants/Constants';
import Form from './Form';
import { withRouter } from 'react-router-dom'

const LoginPage = props => {
    const onSubmit = values => {
        const { userName, password } = values
        userName === PRE_EMAIL && password === PRE_PASSWORD
            ? toast.success(MSG) && props.history.push('/dashboard')
            : toast.warn(ERROR_MSG)
    }
    return <React.Fragment>
        {NOTE}
        <Form onSubmit={onSubmit} />
    </React.Fragment>
}
export default withRouter(LoginPage)