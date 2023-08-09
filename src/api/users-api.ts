import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
    },
    getPages(pageNumber: number, pageSize: number){
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
    }
}