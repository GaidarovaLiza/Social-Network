import {v1} from "uuid";

export type UserType = {
    id: string,
    name: string
}

export type PostType = {
    id: string
    name: string
    body: string
    likes: number
}

type ProfileType = {
    posts: PostType[]
}

export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    messages: MessageType[]
    users: UserType[]
}

export type StateType = {
    dialogsPage: DialogType
    profilePage: ProfileType
}

export let state: StateType = {
    dialogsPage: {
        messages: [
            {id: v1(), message: 'Hi!'},
            {id: v1(), message: 'How are you doing?'},
            {id: v1(), message: 'Yo!'},
        ],
        users: [
            {id: v1(), name: 'Bob'},
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Ann'},
        ]
    },
    profilePage: {
        posts: [
            {id: v1(), name: 'John Doe', body: 'How are you?', likes: 0},
            {id: v1(), name: 'John Doe', body: 'This is my first post', likes: 0}
        ]
    }
}