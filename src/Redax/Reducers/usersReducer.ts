import {Dispatch} from "redux";
import {socialNetworkApi} from "api/socialNetwork-api";
import {appActions} from "app/appReducer";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "Redax/store";

const initialState: UsersDataType = {
    items: [],
    totalCount: 0,
    pages: [],
    pageSize: 5,
    pageCount: 0,
    currentPage: 1,
    portionNumber: 1,
    error: null
};

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        follow: (state, action: PayloadAction<{ userID: number }>) => {
            const index = state.items.findIndex(t => t.id === action.payload.userID);
            if (index !== -1) {
                state.items[index].followed = true;
            }
        },
        unfollow: (state, action: PayloadAction<{ userID: number }>) => {
            const index = state.items.findIndex(t => t.id === action.payload.userID);
            if (index !== -1) {
                state.items[index].followed = false;
            }
        },
        setUsers: (state, action: PayloadAction<{ users: UserType[] }>) => {
            state.items = action.payload.users
        },
        setCurrentPage: (state, action: PayloadAction<{ pageNumber: number }>) => {
            state.currentPage = action.payload.pageNumber
        },
        setPage: (state, action: PayloadAction<{ pages: number[] }>) => {
            state.pages = action.payload.pages
        },
        setPageCount: (state, action: PayloadAction<{ pageCount: number }>) => {
            state.pageCount = action.payload.pageCount
        },
        setPortionNumber: (state, action: PayloadAction<{ portionNumber: number }>) => {
            state.portionNumber = action.payload.portionNumber
        }
    }
})

export const usersReducer = slice.reducer
export const usersActions = slice.actions

//actions

// export const changeUserStatusAC = (id: string, status: RequestStatusType) => ({
//     type: 'CHANGE-USER-STATUS',
//     id,
//     status
// } as const)

//thunk

export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(appActions.setStatus({status: 'loading'}));
        const res = await socialNetworkApi.getUsers(currentPage, pageSize);

        dispatch(usersActions.setUsers({users: res.data.items}));

        let pageCount = Math.ceil(res.data.totalCount / pageSize);
        let pages: Array<number> = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        dispatch(usersActions.setPage({pages: pages}));
        dispatch(usersActions.setPageCount({pageCount: pageCount}));
        dispatch(appActions.setStatus({status: 'succeeded'}));
    } catch (error) {

    }
};

export const getPageTC = (pageNumber: number, pageSize: number): AppThunk => (dispatch) => {
    socialNetworkApi.getPages(pageNumber, pageSize)
        .then((res) => {
            dispatch(usersActions.setUsers({users: res.data.items}))
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
