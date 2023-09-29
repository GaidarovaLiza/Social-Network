import {appActions} from "app/appReducer";
import {Dispatch} from "redux";
import {ResponseType} from "api/socialNetwork-api";

export const handleServerAppError = <T>(dispatch: Dispatch, data: ResponseType<T>) => {
    const error = data.messages[0];
    if (error) {
        dispatch(appActions.setError({error: 'Some error'}));
    } else {
        dispatch(appActions.setError({error: 'Some error'}));
    }
    dispatch(appActions.setStatus({status: 'failed'}))
}

export const handleServerNetworkError = (dispatch: Dispatch, error: { message: string }) => {
    dispatch(appActions.setError({error: "Some error occurred"}));
    dispatch(appActions.setStatus({status: 'failed'}))
}
