import React from "react";
import s from './Pagination.module.css'
import {
    getPageTC, nextPortionAC, prevPortionAC, setCurrentPageAC,
    setPortionNumberAC,
    UsersDataType,
} from "../../Redax/usersReducer";
import {useDispatch} from "react-redux";
import {portionSize, startPortionNumber} from "../Users/constants";
import {useAppDispatch} from "../../Redax/store";

type PropsType = {
    users: UsersDataType
};

export const Pagination: React.FC<PropsType> = (users) => {
    const dispatch = useAppDispatch()
    const dispatchAC = useDispatch()

    const leftPortionPageNumber = users.users.portionNumber * portionSize - portionSize;
    const rightPortionPageNumber = users.users.portionNumber * portionSize;

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(getPageTC(pageNumber, users.users.pageSize))
        dispatch(setPortionNumberAC(Math.ceil(pageNumber / portionSize)))
        dispatchAC(setCurrentPageAC(pageNumber))
    }

    const onNextPortionHandler = () => dispatchAC(nextPortionAC(users.users.portionNumber));
    const onPrevPortionHandler = () => dispatchAC(prevPortionAC(users.users.portionNumber))

    return (
        <div className={s.paginationContainer}>
            {users.users.portionNumber > startPortionNumber && (
                <button className={s.paginationButton} onClick={onPrevPortionHandler}>Prev</button>
            )}
            {users.users.pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber && leftPortionPageNumber >= 0)
                .map((page) => (
                    <span
                        key={page}
                        className={users.users.currentPage === page ? s.selectedPage : s.pageNumber}
                        onClick={() => onPageChangedHandler(page)}
                    >
            {page}{" "}
        </span>
                ))
            }
            {rightPortionPageNumber < users.users.pageCount && (
                <button className={s.paginationButton} onClick={onNextPortionHandler}>Next</button>
            )}
        </div>
    );
};