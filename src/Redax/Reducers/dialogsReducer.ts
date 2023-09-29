import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

export type MessageType = {
    id: string
    message: string
}

const initialState: MessageType[] = []

export const slice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<{ message: string }>) => {
            const newMessage = {id: v1(), message: action.payload.message}
            state.push(newMessage)
        }
    }
})

export const dialogsReducer = slice.reducer
export const dialogsActions = slice.actions

