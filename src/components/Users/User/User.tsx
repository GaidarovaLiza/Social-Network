import React, {FC} from 'react';
import s from './User.module.css'

type UserPropsType = {
    name: string
    id: number
    followed: boolean
    followClickHandler: (id: number) => void
    unFollowClickHandler: (id: number) => void
}


export const User: FC<UserPropsType> = (
    {
        name,
        id,
        followed,
        followClickHandler,
        unFollowClickHandler,
    }) => {


    return (
        <div className={s.userList}>
            <div className={s.user}>
                <div className={s.userAvatar}>
                    <img src="https://via.placeholder.com/150" alt="User Avatar"/>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userName}>{name}</div>
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
