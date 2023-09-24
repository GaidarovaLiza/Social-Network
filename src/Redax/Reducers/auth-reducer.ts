import {FormType} from "components/Login/Login";
import {setStatusAC} from "app/appReducer";
import {authAPI, Result_Code} from "api/socialNetwork-api";
import {handleServerAppError, handleServerNetworkError} from "utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "Redax/store";

const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedIn: (state, action: PayloadAction<{ isLoggedIn: boolean }>) => {
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
})

export const authReducer = slice.reducer
export const authActions = slice.actions

// thunks
export const loginTC = (data: FormType): AppThunk => async (dispatch) => {
    dispatch(setStatusAC('loading'))
    try {
        const res = await authAPI.login(data)
        if (res.data.resultCode === Result_Code.OK) {
            dispatch(authActions.setIsLoggedIn({isLoggedIn: true}))
            dispatch(setStatusAC('succeeded'))
        } else {
            handleServerAppError(dispatch, res.data)
        }
    } catch (e) {
        handleServerNetworkError(dispatch, (e as { message: string }))
    }
}
