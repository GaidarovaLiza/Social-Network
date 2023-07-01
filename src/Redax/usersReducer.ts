import {v1} from "uuid";

type LocationType = {
    country: string
    city: string
}

type UserType = {
    id: string,
    fullName: string,
    status: string
    location: LocationType
    followed: boolean
}

export type UserInitialStateType = {
    users: Array<UserType>
}

const initialState: UserInitialStateType = {
    users: [
        {
            id: v1(),
            fullName: 'Ivan',
            status: 'Hello world!',
            location: {country: 'Belarus', city: 'Minsk'},
            followed: false
        },
        {
            id: v1(),
            fullName: 'Sveta',
            status: 'Im looking for a job',
            location: {country: 'Belarus', city: 'Minsk'},
            followed: false
        },
        {
            id: v1(),
            fullName: 'Denis',
            status: 'YoYo',
            location: {country: 'Ukraine', city: 'Kiev'},
            followed: false
        },
    ]
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType

export const UsersReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...state.users, ...action.payload.users]
            }
        }

        default: {
            return state
        }
    }
}

type FollowACType = ReturnType<typeof followAC>

export const followAC = (userID: string) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userID: string) => {
    return {
        type: "UNFOLLOW",
        payload: {userID}
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        payload: {users}
    } as const
}