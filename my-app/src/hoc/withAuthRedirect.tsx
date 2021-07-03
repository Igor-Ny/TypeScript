import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirectComponent = (Component: any) => {
    class RedirectComponent extends React.Component <any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'login'} />
            return <Component {...this.props} />
        }
    }

    let AuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return AuthRedirect
}