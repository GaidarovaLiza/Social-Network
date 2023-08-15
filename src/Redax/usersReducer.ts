import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";
import {RequestStatusType, setStatusAC} from "../app/appReducer";

const initialState: UsersDataType = {
    items: [],
    totalCount: 0,
    pages: [],
    pageSize: 7,
    pageCount: 0,
    currentPage: 1,
    portionNumber: 1,
    error: null
};

export const UsersReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(u => u.id == action.userID ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, items: state.items.map(u => u.id === action.userID ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, items: [...action.users]}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.pageNumber}
        case 'SET-PAGES':
            return {...state, pages: action.pages};
        case 'SET-PAGE-COUNT':
            return {...state, pageCount: action.pageCount};
        case "SET-PORTION-NUMBER":
            return {...state, portionNumber: action.portionNumber};
        case "NEXT-PORTION":
            return {...state, portionNumber: action.portionNumber + 1}
        case "PREV-PORTION":
            return {...state, portionNumber: action.portionNumber - 1}
        default: {
            return state
        }
    }
}

//actions

export const followAC = (userID: number) => ({type: "FOLLOW", userID} as const)
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPageAC = (pageNumber: number) => ({type: "SET-CURRENT-PAGE", pageNumber} as const)
export const setPagesAC = (pages: Array<number>) => ({type: 'SET-PAGES', pages} as const);
export const setPageCountAC = (pageCount: number) => ({type: 'SET-PAGE-COUNT', pageCount} as const);
export const setPortionNumberAC = (portionNumber: number) => ({type: "SET-PORTION-NUMBER", portionNumber} as const);
export const nextPortionAC = (portionNumber: number) => ({type: "NEXT-PORTION", portionNumber} as const);
export const prevPortionAC = (portionNumber: number) => ({type: "PREV-PORTION", portionNumber} as const);
export const changeUserStatusAC = (id: string, status: RequestStatusType) => ({
    type: 'CHANGE-USER-STATUS',
    id,
    status
} as const)

//thunk

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    usersAPI.getUsers(currentPage, pageSize)
        .then((res) => {
            dispatch(setUsersAC(res.data.items))

            let pageCount = Math.ceil(res.data.totalCount / pageSize);
            let pages: Array<number> = [];

            for (let i = 1; i <= pageCount; i++) {
                pages.push(i);
            }

            dispatch(setPagesAC(pages));
            dispatch(setPageCountAC(pageCount));
            dispatch(setStatusAC('succeeded'));
        })
}
export const getPageTC = (pageNumber: number, pageSize: number) => (dispatch: Dispatch<ActionType>) => {
    usersAPI.getPages(pageNumber, pageSize)
        .then((res) => {
            dispatch(setUsersAC(res.data.items))
        })
}

//types

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export type UsersDataType = {
    items: UserType[];
    totalCount: number;
    pages: Array<number>
    pageSize: number;
    pageCount: number;
    currentPage: number;
    portionNumber: number;
    error: string | null;
}

type ActionType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPagesAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setPortionNumberAC>
    | ReturnType<typeof nextPortionAC>
    | ReturnType<typeof prevPortionAC>
    | ReturnType<typeof changeUserStatusAC>