import React from "react";
import s from './Pagination.module.css'
import {
    getPageTC,
    nextPortionAC,
    prevPortionAC,
    setCurrentPageAC,
    setPortionNumberAC,
    UsersDataType,
} from "../../Redax/usersReducer";
import {useAppDispatch} from "../../Redax/store";

type PropsType = {
    users: UsersDataType
};

export const Pagination: React.FC<PropsType> = ({users}) => {
    const {currentPage, pages, portionNumber, pageCount, pageSize} = users;
    const dispatch = useAppDispatch()

    const leftPortionPageNumber = portionNumber * PaginationNums.portionSize - PaginationNums.portionSize;
    const rightPortionPageNumber = portionNumber * PaginationNums.portionSize;

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(getPageTC(pageNumber, pageSize))
        dispatch(setPortionNumberAC(Math.ceil(pageNumber / PaginationNums.portionSize)))
        dispatch(setCurrentPageAC(pageNumber))
    }

    const onNextPortionHandler = () => dispatch(nextPortionAC(portionNumber));
    const onPrevPortionHandler = () => dispatch(prevPortionAC(portionNumber))


    const filteredPages = pages.filter(
        (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
    );

    const renderedPages = filteredPages.map((page) => (
        <span
            key={page}
            className={currentPage === page ? s.selectedPage : s.pageNumber}
            onClick={() => onPageChangedHandler(page)}
        >
    {page}
  </span>
    ));

    return (
        <div className={s.paginationContainer}>
            {portionNumber > PaginationNums.startNumber && (
                <button className={s.paginationButton} onClick={onPrevPortionHandler}>Prev</button>
            )}
            {renderedPages}
            {rightPortionPageNumber < pageCount && (
                <button className={s.paginationButton} onClick={onNextPortionHandler}>Next</button>
            )}
        </div>
    );
};

enum PaginationNums {
    startNumber = 1,
    portionSize = 10
}