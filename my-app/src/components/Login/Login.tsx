import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginMe } from "../../Redux/auth-reducer";
import { required } from "../../utils/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from './../common/FormsControls/FormsControls.module.css'

export const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit} >
        <div>
            <Field placeholder={'Email'} name={'email'} validate={[required]} component={Input} />
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} validate={[required]}
                component={Input} type='password' />
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
        </div>
        {props.error && <div className={style.formSummeryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>

}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props: any) => {
    let onSubmit = (formData: any) => {
        props.loginMe(formData.email, formData.password, formData.rememberMe);
        console.log(formData.email + '  ' + formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { loginMe })(Login)