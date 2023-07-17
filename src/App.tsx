import React from "react";
import "./App.module.css";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import s from './App.module.css'
import {Users} from "./components/Users/Users";
import UsersClass from "./components/Users/UsersClass";

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

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className='routes'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/music" element={Music}/>
                        <Route path="/news" element={News}/>
                        <Route path="/settings" element={Settings}/>
                        <Route path="/users" element={<Users/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
