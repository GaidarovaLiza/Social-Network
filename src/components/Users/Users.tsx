import React, {useEffect} from 'react';
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redax/store";
import {followAC, setUsersAC, unfollowAC, UsersDataType} from "../../Redax/usersReducer";
import {User} from "./User/User";
import axios from "axios";

export const Users = () => {
    const users = useSelector<AppRootStateType, UsersDataType>(state => state.UsersReducer)
    const dispatch = useDispatch()

    const followClickHandler = (userID: number) => dispatch(followAC(userID))
    const unFollowClickHandler = (userID: number) => dispatch(unfollowAC(userID))

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0//users')
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
            })
    }, [])

    return (
        <div className={s.mainContainer}>
            {users.items.map(u => <User name={u.name}
                                        id={u.id}
                                        followed={u.followed}
                                        followClickHandler={followClickHandler}
                                        unFollowClickHandler={unFollowClickHandler}
                />
            )}
        </div>
    );
};

