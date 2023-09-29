import React, {useEffect} from 'react';
import s from './Users.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch, useAppSelector} from "Redax/store";
import {getUsersTC, usersActions, UsersDataType} from "Redax/Reducers/usersReducer";
import {User} from "./User/User";
import {CircularProgress} from "@mui/material";
import {RequestStatusType} from "app/appReducer";
import {BasicPagination} from "../Pagination/BasicPaginations";

export const Users = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const users = useSelector<AppRootStateType, UsersDataType>(state => state.users)
    const dispatch = useAppDispatch()

    const followClickHandler = (userID: number) => dispatch(usersActions.follow({userID: userID}))
    const unFollowClickHandler = (userID: number) => dispatch(usersActions.unfollow({userID: userID}))

    useEffect(() => {
        dispatch(getUsersTC(users.currentPage, users.pageSize));
    }, []);


    const usersMapped = users.items.map(u => <User name={u.name}
                                                   id={u.id}
                                                   followed={u.followed}
                                                   followClickHandler={followClickHandler}
                                                   unFollowClickHandler={unFollowClickHandler}
        />
    )

    const isFetching = status === 'loading';

    return (
        <div className={s.mainContainer}>
            {isFetching && <CircularProgress/>}
            {usersMapped}
            <BasicPagination users={users}/>
        </div>
    );
};

