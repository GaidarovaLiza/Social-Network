import React, {useEffect} from "react";
import "./App.module.css";
import {Navbar} from "../components/Navbar/Navbar";
import {Profile} from "../components/Profile/Profile";
import {Dialogs} from "../components/Dialogs/Dialogs";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {Music} from "../components/Music/Music";
import {News} from "../components/News/News";
import {Settings} from "../components/Settings/Settings";
import s from './App.module.css'
import {Users} from "../components/Users/Users";
import {Header} from "../components/Header/Header";
import {Login} from "../components/Login/Login";
import {useAppSelector} from "../Redax/store";

export type PostsType = PostType[]

type PostType = {
    id: string
    name: string
    body: string
    likes: number
}

export type MessagesType = MessageType[]

export type MessageType = {
    id: string
    message: string
}

export type UsersType = UserType[]

export type UserType = {
    id: string,
    name: string
}

export const App = () => {
    const location = useLocation();
    const isLoggedIn = useAppSelector(state => state.authReducer.isLoggedIn)
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className={s.appWrapper}>
            {location.pathname !== '/login' && <Header/>}
            {location.pathname !== '/login' && <Navbar/>}
            <div className='routes'>
                <Routes>
                    <Route path={"/"} element={<Profile/>}/>
                    <Route path={'login'} element={<Login/>}/>
                    <Route path={"dialogs"} element={<Dialogs/>}/>
                    <Route path={"music"} element={Music}/>
                    <Route path={"news"} element={News}/>
                    <Route path={"settings"} element={Settings}/>
                    <Route path={"users"} element={<Users/>}/>
                    <Route path={'404'} element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
                    <Route path='*' element={<Navigate to={'404'}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
