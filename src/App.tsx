import React, {useState} from "react";
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
import {v1} from "uuid";
import {StateType} from "./Redax/State";

export type PostsType = PostType[]

type PostType = {
    id: string
    name: string
    body: string
    likes: number
}

type PropsType = {
    state: StateType
}

export const App: React.FC<PropsType> = (
    {
        state
    }) => {
    const [posts, setPost] = useState([
        {id: v1(), name: 'John Doe', body: 'How are you?', likes: 0},
        {id: v1(), name: 'John Doe', body: 'This is my first post', likes: 0},
    ])

    const addPost = (body: string) => {
        let newPost = {id: v1(), name: 'John Doe', body: body, likes: 0}
        setPost([newPost, ...posts])
    }

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className='routes'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs state={state.dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile addPost={addPost} posts={posts}/>}/>
                        <Route path="/music" element={Music}/>
                        <Route path="/news" element={News}/>
                        <Route path="/settings" element={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
