import {v1} from "uuid";

export type UserType = {
    id: string,
    name: string
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
    }
}