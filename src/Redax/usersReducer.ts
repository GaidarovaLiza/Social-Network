type UserType = {
    name: string;
    id: number;
    uniqueUrlName: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: string | null;
    followed: boolean;
}

export  type UsersDataType = {
    items: UserType[];
    totalCount: number;
    error: string | null;
}

const initialState: UsersDataType = {
    items: [],
    totalCount: 0,
    error: null
};

type ActionType = FollowACType | UnfollowACType | SetUsersACType

export const UsersReducer = (state: UsersDataType = initialState, action: ActionType): UsersDataType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                items: state.items.map(u => u.id == action.payload.userID ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                items: state.items.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                items: [...state.items, ...action.payload.users]
            }
        }
        default: {
            return state
        }
    }
}

type FollowACType = ReturnType<typeof followAC>

export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        payload: {userID}
    } as const
}

type UnfollowACType = ReturnType<typeof unfollowAC>

export const unfollowAC = (userID: number) => {
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