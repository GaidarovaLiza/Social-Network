import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export function MyPosts() {
  return (
    <div>
      my posts
      <div>new post</div>
			<textarea></textarea>
			<button>Add post</button>
      <Post like={15} message={'Hi, how are you'}/>
			<Post like={20} message={'My first post'}/>
    </div>
  );
}
