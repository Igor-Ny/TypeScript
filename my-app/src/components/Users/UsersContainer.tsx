import React, { ComponentType } from 'react';
import { connect, useStore } from 'react-redux';
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC, toggoleFollowingProgress, getUsersThunkCreator, followTC, unfollowTC } from '../../Redux/users-reducer';
import { Users } from './Users';
import { Preloader } from './../common/Preloader/Preloader'
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper } from '../../Redux/users-selector';

type Props = {
    users: any;
    pageSize: any;
    totalUsersCount: any;
    currentPage: any;
    isFetching: any;
    followingInProgress: any;
    follow?: (userId: any) => void;
    unfollow?: (userId: any) => void;
    setUsers?: (users: any) => void;
    setCurrentPage?: (currentPage: any) => void;
    setTotalUsersCount?: (ustotalUsersCounters: any) => void;
    setIsFetching?: (userisFetchings: any) => void;
    toggoleFollowingProgress?: (followingInProgress: any, usersId:any) => void;
    getUsersThunkCreator: (currentPage: any, pageSize: any) => void;
}

class UsersC extends React.Component <any> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)   
    }

    onPageChanged = (pageNamber: any) => {
        
        this.props.getUsersThunkCreator(pageNamber, this.props.pageSize)
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followTC={this.props.follow}
                unfollowTC={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                toggoleFollowingProgress={this.props.toggoleFollowingProgress}
                followingInProgress={this.props.followingInProgress} />
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose <ComponentType>(
    connect(mapStateToProps, {
        follow: followTC,
        unfollow: unfollowTC,
        setCurrentPage: setCurrentPageAC,
        toggoleFollowingProgress: toggoleFollowingProgress,
        getUsersThunkCreator: getUsersThunkCreator,
    })
)(UsersC)

// connect(mapStateToProps, {
//     follow: followTC,
//     unfollow: unfollowTC,
//     setCurrentPage: setCurrentPageAC,
//     toggoleFollowingProgress: toggoleFollowingProgress,
//     getUsersThunkCreator: getUsersThunkCreator,
// })(UsersC)