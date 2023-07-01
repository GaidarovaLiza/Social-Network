import {combineReducers, createStore} from "redux";
import {PostsReducer} from "./postsReducer";
import {DialogsReducer} from "./dialogsReducer";
import {UsersChatReducer} from "./usersChatReducer";
import {UsersReducer} from "./usersReducer";

const rootReducers = combineReducers({
    DialogsReducer,
    PostsReducer,
    UsersChatReducer,
    UsersReducer,
})

export let store = createStore(rootReducers)

export type AppRootStateType = ReturnType<typeof rootReducers>