import {setErrorAC, SetErrorType, setStatusAC, SetStatusType} from "../app/appReducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/socialNetwork-api";


export const handleServerAppError = <T>(dispatch: ErrorUtilsDispatchType, data: ResponseType<T>) => {
    const error = data.messages[0];
    if (error) {
        dispatch(setErrorAC(error));
    } else {
        dispatch(setErrorAC('Some error'));
    }
    dispatch(setStatusAC('failed'))
}

export const handleServerNetworkError = (dispatch: ErrorUtilsDispatchType, error: { message: string }) => {
    dispatch(setErrorAC(error.message ? error.message : "Some error occurred"));
    dispatch(setStatusAC('failed'))
}


type ErrorUtilsDispatchType =  Dispatch<SetStatusType | SetErrorType>