import React from 'react'
import './Form.css'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'reactstrap';
import { renderInput } from '../../fieldsTemplets';
import { useSelector } from 'react-redux'
import validate from './Validation'

let Form = props => {
    const { pristine, submitting, handleSubmit, reset, onSubmit } = props;
    const { isOffline } = useSelector(state => state.nw)

    return <div className="base-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field type="text" name="userName" id="userName" component={renderInput} placeholder="Enter Name" />
            <Field type="password" name="password" id="password" component={renderInput} placeholder="Enter Psssword" />
            <Button outline color="danger" type="submit" onClick={reset} disabled={pristine || submitting} className="form-button"><i className="fa fa-minus-circle" />&nbsp;Clear</Button>&nbsp;
            <Button color="primary" type="submit" disabled={pristine || submitting || isOffline} className="form-button"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Login</Button>
        </form><br /><br />
    </div>
}
export default reduxForm({
    validate,
    form: 'loginForm',
})(Form)