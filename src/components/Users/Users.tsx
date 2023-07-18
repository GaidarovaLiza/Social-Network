import React, {useEffect, useState} from 'react';
import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redax/store";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UsersDataType} from "../../Redax/usersReducer";
import {User} from "./User/User";
import axios from "axios";
import {Pagination} from "../Pagination/Paginations";

export const Users = () => {
    const [pages, setPages] = useState<Array<number>>([])
    const users = useSelector<AppRootStateType, UsersDataType>(state => state.UsersReducer)
    const dispatch = useDispatch()

    const followClickHandler = (userID: number) => dispatch(followAC(userID))
    const unFollowClickHandler = (userID: number) => dispatch(unfollowAC(userID))

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageNumber}&count=${users.pageSize}`)
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
            })
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${users.currentPage}&count=${users.pageSize}`)
            .then((res) => {
                dispatch(setUsersAC(res.data.items))

                let pageCount = Math.ceil(res.data.totalCount / users.pageSize)
                console.log(pageCount)
                let pages: Array<number> = []

                for (let i = 1; i <= pageCount; i++) {
                    pages.push(i)
                }
                setPages(pages)
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
            <div>
                <Pagination
                    pages={pages}
                    currentPage={users.currentPage}
                    pageSize={users.pageSize}
                    totalItemsCount={users.totalCount}
                    onPageChanged={onPageChangedHandler}
                />
            </div>
        </div>
    );
};

