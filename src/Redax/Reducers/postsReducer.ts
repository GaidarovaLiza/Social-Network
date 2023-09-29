import {PostType} from "../State";
import {v1} from "uuid";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


let initialState: PostType[] = []

const slice = createSlice({
        name: 'posts',
        initialState,
        reducers: {
            addPost: (state, action: PayloadAction<{ body: string }>) => {
                let newPost = {id: v1(), name: 'Fixed', body: action.payload.body, likes: 0}
                state.unshift(newPost)
            }
        }
    }
)

export const postsReducer = slice.reducer
export const postsActions = slice.actions
