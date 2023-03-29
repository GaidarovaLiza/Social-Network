import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

export function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src="https://pbs.twimg.com/media/EL_CSbzXYAAviQL.jpg" />
      </div>
      <div>ava + discription</div>
      <MyPosts/>
    </div>
  );
}
