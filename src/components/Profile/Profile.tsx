import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../app/App";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppSelector} from "../../Redax/store";
import {addPostAC} from "../../Redax/postsReducer";
import {Navigate} from "react-router-dom";

export const Profile = () => {
    let posts = useSelector<AppRootStateType, PostsType>(state => state.PostsReducer)


    const dispatch = useDispatch()

    const addPost = (body: string) => {
        dispatch(addPostAC(body))
    }

    return (
        <div className={s.content}>
            <MyPosts addPost={addPost} posts={posts}/>
            <ProfileInfo/>
        </div>
    );
}
