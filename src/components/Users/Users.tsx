import React from 'react';
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redax/store";
import {followAC, setUsersAC, unfollowAC, UserInitialStateType} from "../../Redax/usersReducer";
import {User} from "./User/User";

export const Users = () => {
    const users = useSelector<AppRootStateType, UserInitialStateType>(state => state.UsersReducer)
    const dispatch = useDispatch()


    const followClickHandler = (userID: string) => dispatch(followAC(userID))
    const unFollowClickHandler = (userID: string) => dispatch(unfollowAC(userID))


    const showUsersHandler = () => dispatch(setUsersAC(users.users))


    return (
        <div className={s.mainContainer}>
            {users.users.map(u => <User name={u.fullName}
                                        id={u.id}
                                        country={u.location.country}
                                        followed={u.followed}
                                        followClickHandler={followClickHandler}
                                        unFollowClickHandler={unFollowClickHandler}/>
            )}
        </div>
    );
};

