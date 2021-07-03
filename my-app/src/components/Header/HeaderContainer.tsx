import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { getMe, logoutMe } from './../../Redux/auth-reducer'
import { dataMe } from '../../api/API';

type T = {
    getMe?: () => void
    setAuthUserData?: (userID: any, email: any, login: any) => any;
}

class HeaderContainer extends React.Component<any> {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, { logoutMe })(HeaderContainer)