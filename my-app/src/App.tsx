import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter } from 'react-router-dom';
import { News } from './components/News/News'
import { Music } from './components/Music/Music'
import { Settings } from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login'
import { connect } from 'react-redux';
import { initialize } from './Redux/app-reducer';
import { compose } from 'redux';
import { Preloader } from './components/common/Preloader/Preloader';
// import DialogsContaner from './components/Dialogs/DialogsContainer';
const DialogsContaner = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component<any, any> {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
            render={() => {
              return <Suspense fallback={<div>Loading...</div>} >
              <DialogsContaner />
              </Suspense>
            }} />
          <Route path="/profile/:userId?" component={ProfileContainer}
            render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          <Route path="/news" render={News} />
          <Route path="/music" render={Music} />
          <Route path="/settings" render={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, { initialize }))(App) as React.ComponentType

