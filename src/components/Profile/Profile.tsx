import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";

type PropsType = {
    posts: PostsType
    addPost: (body: string)=> void
}

export function Profile(props: PropsType) {
    return (
        <div className={s.content}>
            <MyPosts addPost={props.addPost} posts={props.posts}/>
            <ProfileInfo/>

        </div>
    );
}
