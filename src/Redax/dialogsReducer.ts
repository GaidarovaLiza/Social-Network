import {v1} from "uuid";
import {MessageType} from "./State";

const initialState: MessageType[] = [
    {id: v1(), message: 'Hi!'},
    {id: v1(), message: 'How are you doing?'},
    {id: v1(), message: 'Yo!'},
]

type ActionType = AddMessageACType

export const DialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {id: v1(), message: action.payload.message}
            return [...state, newMessage]
        }
        default: {
            return state
        }
    }
}

type AddMessageACType = ReturnType<typeof addMessageAC>

export const addMessageAC = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        payload: {
            message
        }
    } as const
}