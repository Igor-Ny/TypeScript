import React from 'react';
import style from './Users.module.css';
import userPhoto from "../../photo/user.png";
import { NavLink } from 'react-router-dom';

export const User = (user: any, followingInProgress: any, unfollowTC: any, followTC: any) => {
    return (
        <div className="user">
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                            className={style.userPhoto} />
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some((id: any) => id == user.id)}
                            onClick={() => {
                                unfollowTC(user.id)
                            }}>Unfollow</button>
                        : <button disabled={followingInProgress.some((id: any) => id == user.id)}
                            onClick={() => {
                                followTC(user.id)
                            }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status} </div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    );
}