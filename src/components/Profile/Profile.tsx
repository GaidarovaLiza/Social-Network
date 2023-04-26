import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import { PropfileInfo } from "./PropfileInfo/PropfileInfo";

export function Profile() {
  return (
    <div className={s.content}>
      <PropfileInfo />
      <MyPosts />
    </div>
  );
}
