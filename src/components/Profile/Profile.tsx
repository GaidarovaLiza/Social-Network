import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";
import React from "react";

type PropsType = {
    posts: PostsType
    addPost: (body: string) => void
}

export const Profile: React.FC<PropsType> = (
    {
        posts,
        addPost
    }
) => {
    return (
        <div className={s.content}>
            <MyPosts addPost={addPost} posts={posts}/>
            <ProfileInfo/>

        </div>
    );
}
