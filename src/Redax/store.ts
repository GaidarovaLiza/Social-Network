import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {PostsReducer} from "./postsReducer";
import {DialogsReducer} from "./dialogsReducer";
import {UsersChatReducer} from "./usersChatReducer";
import {UsersReducer} from "./usersReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";

const rootReducers = combineReducers({
    DialogsReducer,
    PostsReducer,
    UsersChatReducer,
    UsersReducer,
})

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

export let store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>