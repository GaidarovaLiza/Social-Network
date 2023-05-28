import {PostType} from "./State";
import {v1} from "uuid";

type ActionType = AddPostACType

export const postsReducer = (state: PostType[], action: ActionType): PostType[] => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: v1(), name: 'John Doe', body: action.payload.body, likes: 0}
            return [newPost, ...state]
        }
    }
}

type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (body: string) => {
    return {
        type: "ADD-POST",
        payload: {
            body
        }
    } as const
}