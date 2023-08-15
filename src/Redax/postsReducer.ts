import {PostType} from "./State";
import {v1} from "uuid";

type ActionType = AddPostACType

let initialState: PostType[] = [
    {id: v1(), name: 'John Doe', body: 'How are you?', likes: 0},
    {id: v1(), name: 'John Doe', body: 'This is my first post', likes: 0}
]

export const PostsReducer = (state = initialState, action: ActionType): PostType[] => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {id: v1(), name: 'John Doe', body: action.body, likes: 0}
            return [newPost, ...state]
        }
        default: {
            return state
        }
    }
}

type AddPostACType = ReturnType<typeof addPostAC>

export const addPostAC = (body: string) => ({type: "ADD-POST", body} as const)
