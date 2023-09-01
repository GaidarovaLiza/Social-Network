import React from "react";
import {
    getPageTC,
    setCurrentPageAC,
    setPortionNumberAC,
    UsersDataType,
} from "../../Redax/usersReducer";
import {useAppDispatch} from "../../Redax/store";
import {Pagination} from "@mui/material";

type PropsType = {
    users: UsersDataType
};

export const BasicPagination: React.FC<PropsType> = ({users}) => {
    const {currentPage, pageSize} = users;
    const dispatch = useAppDispatch()

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(getPageTC(pageNumber, pageSize))
        dispatch(setPortionNumberAC(Math.ceil(pageNumber / PaginationNums.portionSize)))
        dispatch(setCurrentPageAC(pageNumber))
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