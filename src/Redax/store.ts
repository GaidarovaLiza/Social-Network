import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {PostsReducer} from "./postsReducer";
import {DialogsReducer} from "./dialogsReducer";
import {UsersChatReducer} from "./usersChatReducer";
import {UsersReducer} from "./usersReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appReducer} from "../app/appReducer";

const rootReducers = combineReducers({
    DialogsReducer,
    PostsReducer,
    UsersChatReducer,
    UsersReducer,
    appReducer
})

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export let store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>