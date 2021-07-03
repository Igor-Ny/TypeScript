import axios from 'axios';
import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileTC, getStatus, updateStatus } from './../../Redux/profile-reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import { getProfile } from '../../api/API';
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

type PropsType = RouteComponentProps & {
  profile: any;
  isAuth: any;
  setUserProfile?: (profile: any) => void;
  match: any
  profileTC: (userId: any) => void;
}

class ProfileContainer extends React.Component<any, any> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorisedUserId;
      if(!userId){
        this.props.history.push('/login')
      }
    }
    this.props.profileTC(userId)
    this.props.getStatus(userId)
  }

  render() {


    return (
      <Profile {...this.props} profile={this.props.profile}
        status={this.props.status} upsateStatus={this.props.updateStatus} />
    );

  }
}

let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userID,
  isAuth: state.auth.isAuth
});

export default compose<ComponentType>(
  connect(mapStateToProps, { profileTC, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirectComponent
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer)

// let withUrlConteinerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, { profileTC })(withUrlConteinerComponent);