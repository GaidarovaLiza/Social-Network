import {authAPI} from "api/socialNetwork-api";
import {Dispatch} from "redux";
import {authActions} from "Redax/Reducers/auth-reducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
}

type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-INITIALIZED":
            return {...state, isInitialized: action.value}
        default:
            return state
    }
}

export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppInitializedAC = (value: boolean) => ({type: 'APP/SET-INITIALIZED', value} as const)

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(authActions.setIsLoggedIn({isLoggedIn: true}));
        } else {
        }
        dispatch(setAppInitializedAC(true));
    });
};

export type SetStatusType = ReturnType<typeof setStatusAC>
export type SetErrorType = ReturnType<typeof setErrorAC>
export type SetInitializedType = ReturnType<typeof setAppInitializedAC>

type ActionsType = SetStatusType | SetErrorType | SetInitializedType