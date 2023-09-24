import {AnyAction, combineReducers} from "redux";
import {PostsReducer} from "./Reducers/postsReducer";
import {DialogsReducer} from "./Reducers/dialogsReducer";
import {UsersChatReducer} from "./Reducers/usersChatReducer";
import {UsersReducer} from "./Reducers/usersReducer";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "app/appReducer";
import {authReducer} from "./Reducers/auth-reducer";
import {userPageReducer} from "./Reducers/userPage-reducer";
import {configureStore} from "@reduxjs/toolkit";

const rootReducers = combineReducers({
    DialogsReducer,
    PostsReducer,
    UsersChatReducer,
    UsersReducer,
    appReducer,
    auth: authReducer,
    userPageReducer
})

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export let store = configureStore({reducer: rootReducers})

export type AppRootStateType = ReturnType<typeof store.getState>