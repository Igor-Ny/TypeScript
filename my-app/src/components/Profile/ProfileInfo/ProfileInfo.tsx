import React from 'react';
import { Preloader } from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import { ProfileStatus } from './ProfileStatus';
import userPhoto from "../../../photo/user.png";
import { ProfileStatusWhitHook } from './ProfileStatusWithHook';

export const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.font}>
            {/* <img src="https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg" alt="" /> */}
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large: userPhoto} />
                <div>
                    {props.profile.fullName}
                    <ProfileStatusWhitHook status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        </div>
    );
}