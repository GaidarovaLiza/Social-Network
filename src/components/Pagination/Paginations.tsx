import React from "react";
import {useState} from "react";
import s from './Pagination.module.css'
import {setCurrentPageAC, setUsersAC, UsersDataType} from "../../Redax/usersReducer";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redax/store";

type PropsType = {
    pages: Array<number>
    pageCount: number
    currentPage: number;
    pageSize: number;
    totalItemsCount: number;
};

export const Pagination: React.FC<PropsType> = ({
                                                    pages,
                                                    pageCount,
                                                    currentPage,
                                                    pageSize,

                                                }) => {
    const [portionNumber, setPortionNumber] = useState(1);
    const dispatch = useDispatch()

    const portionSize = 10;

    const leftPortionPageNumber = portionNumber * portionSize - portionSize;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageNumber}&count=${pageSize}`)
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
                setPortionNumber(Math.ceil(pageNumber / portionSize))
            })
    }

    const onNextPortionHandler = () => {
        setPortionNumber(portionNumber + 1);
    };

    const onPrevPortionHandler = () => {
        setPortionNumber(portionNumber - 1);
    };

    return (
        <div>
            {portionNumber > 1 && (
                <button onClick={onPrevPortionHandler}>Prev</button>
            )}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber && leftPortionPageNumber >= 0)
                .map((page) => (
                    <span
                        key={page}
                        className={currentPage === page ? s.selected : s.pageNumber}
                        onClick={() => onPageChangedHandler(page)}
                    >
            {page}{" "}
        </span>
                ))
            }
            {rightPortionPageNumber < pageCount && (
                <button onClick={onNextPortionHandler}>Next</button>
            )}
        </div>
    );
};