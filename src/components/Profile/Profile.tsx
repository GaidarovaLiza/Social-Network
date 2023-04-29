import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return (
        <div className={s.content}>
            <MyPosts/>
            <ProfileInfo/>

        </div>
    );
}
