import React from 'react';
import style from './Users.module.css';
import userPhoto from "../../photo/user.png";
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/Paginetor/Paginator';
import {User} from './User';

export const Users = (props: any) => {

    return (
        <div className={style.marg}>
            
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={10} />
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                    className={style.userPhoto} />
                            </NavLink>
                        </div>

                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some((id: any) => id == u.id)}
                                    onClick={() => {
                                        props.unfollowTC(u.id)
                                    }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some((id: any) => id == u.id)}
                                    onClick={() => {
                                        props.followTC(u.id)
                                    }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status} </div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}