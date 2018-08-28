import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from './submit';

let LoginForm = props => {
    const { handleSubmit, submitting } = props;

    return (
        <form onSubmit={handleSubmit(submit)} >
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button disabled={submitting} type="submit">
                Log in
            </button>
        </form>
    );
};

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;