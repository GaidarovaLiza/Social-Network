import {v1} from "uuid";
import {UsersType} from "../App";

const initialState: UsersType = [
    {id: v1(), name: 'Bob'},
    {id: v1(), name: 'Alex'},
    {id: v1(), name: 'Ann'},
]

type ActionType = any

export const UsersChatReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'xxx': {
            return state
        }
        default: {
            return state
        }
    }
}