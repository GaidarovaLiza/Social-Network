import React from "react";
import {getPageTC, usersActions, UsersDataType,} from "Redax/Reducers/usersReducer";
import {useAppDispatch} from "Redax/store";
import {Pagination} from "@mui/material";

type PropsType = {
    users: UsersDataType
};

export const BasicPagination: React.FC<PropsType> = ({users}) => {
    const {currentPage, pageSize, pages} = users;

    console.log(pages)
    const dispatch = useAppDispatch()

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(getPageTC(pageNumber, pageSize))
        dispatch(usersActions.setPortionNumber({portionNumber: Math.ceil(pageNumber / PaginationNums.portionSize)}))
        dispatch(usersActions.setCurrentPage({pageNumber: pageNumber}))
    }

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number) => {
        onPageChangedHandler(page);
    };

    return (
        <Pagination count={20}
                    page={currentPage}
                    color="primary"
                    onChange={handlePaginationChange}
                    boundaryCount={2}
                    siblingCount={1}/>
    );
};

enum PaginationNums {
    portionSize = 10
}