import axios, {AxiosResponse} from "axios";
import {FormType} from "../components/Login/Login";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {}
})

export const authAPI = {
    login(data: FormType) {
        return instance.post<null, AxiosResponse<ResponseType<{ userId: number }>>, FormType>('auth/login', data);
    },
    me() {
        return instance.get<ResponseType<{ id: number; email: string; login: string }>>('auth/me')
    }
}

export const socialNetworkApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    getPages(pageNumber: number, pageSize: number) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
    },
    getUserPage(userId: string) {
        return instance.get(`/profile/${userId}`)
    }
}

export enum Result_Code {
    OK = 0,
    ERROR = 1,
    CAPTCHA_ERROR = 10
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}