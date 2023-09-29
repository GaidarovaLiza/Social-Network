import {Dispatch} from "redux";
import {socialNetworkApi} from "api/socialNetwork-api";
import {appActions} from "app/appReducer";

const initialState: InitialStateType = {
    aboutMe: "я круто чувак 1001%",
    contacts: {
        facebook: "facebook.com",
        website: null,
        vk: "vk.com",
        twitter: "https://twitter.com",
        instagram: "instagram.com",
        youtube: null,
        github: "github.com",
        mainLink: null,
    },
    lookingForAJob: true,
    lookingForAJobDescription: "не ищу, а дурачусь",
    fullName: "samurai dimych",
    userId: "2",
    photos: {
        small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=1666",
        large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=1666"
    }
}

export const userPageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'GET-USER':
            return {...state, ...action.user}
        default:
            return state
    }
}

//actions

export const getUserAC = (user: InitialStateType) => ({type: "GET-USER", user} as const)

//thunk

export const getUserTC = (userId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(appActions.setStatus({status: 'loading'}))
        const res = await socialNetworkApi.getUserPage(userId)

        dispatch(getUserAC(res.data.data))
        dispatch(appActions.setStatus({status: 'succeeded'}))
    } catch (error) {
        //error
    }
}

//types

type InitialStateType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: null | string
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: null | string
        github: string | null
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: string | null
    photos: {
        small: string | null
        large: string | null
    }
}
type ActionsType = GetUserACType

type GetUserACType = ReturnType<typeof getUserAC>