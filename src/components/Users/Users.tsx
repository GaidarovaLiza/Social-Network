import React, {useEffect} from 'react';
import s from './Users.module.css'
import { useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../Redax/store";
import {followAC, getUsersTC, unfollowAC, UsersDataType} from "../../Redax/usersReducer";
import {User} from "./User/User";
import {Pagination} from "../Pagination/Paginations";

export const Users = () => {
    const users = useSelector<AppRootStateType, UsersDataType>(state => state.UsersReducer)
    const dispatch = useAppDispatch()

    const followClickHandler = (userID: number) => dispatch(followAC(userID))
    const unFollowClickHandler = (userID: number) => dispatch(unfollowAC(userID))

    useEffect(() => {
        dispatch(getUsersTC(users.currentPage, users.pageSize));
    }, []);

    return (
        <div className={s.mainContainer}>
            {users.items.map(u => <User name={u.name}
                                        id={u.id}
                                        followed={u.followed}
                                        followClickHandler={followClickHandler}
                                        unFollowClickHandler={unFollowClickHandler}
                />
            )}
            <div>
                <Pagination
                    users={users}
                />
            </div>
        </div>
    );
};

