import {combineReducers, createStore} from "redux";
import {PostsReducer} from "./postsReducer";
import {DialogsReducer} from "./dialogsReducer";
import {UsersReducer} from "./usersReducer";

const rootReducers = combineReducers({
    DialogsReducer,
    PostsReducer,
    UsersReducer
})

export let store = createStore(rootReducers)

export type AppRootStateType = ReturnType<typeof rootReducers>