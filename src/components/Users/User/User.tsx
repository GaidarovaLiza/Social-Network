import React, {FC} from 'react';
import s from './User.module.css'

type UserPropsType = {
    name: string
    id: string
    country: string
    followed: boolean
    followClickHandler: (id: string) => void
    unFollowClickHandler: (id: string) => void
}


export const User: FC<UserPropsType> = ({name, id, country, followed, followClickHandler, unFollowClickHandler}) => {
    return (
        <div className={s.userList}>
            <div className={s.user}>
                <div className={s.userAvatar}>
                    <img src="https://via.placeholder.com/150" alt="User Avatar"/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>{name}</div>
                    <div className={s.userLocation}>{country}</div>
                </div>
                <div className={s.userAction}>
                    {followed
                        ? <button onClick={() => unFollowClickHandler(id)} className={s.btnFollow}>Unfollow</button>
                        : <button onClick={() => followClickHandler(id)} className={s.btnFollow}>Follow</button>
                    }
                </div>
            </div>
        </div>
    );
};
