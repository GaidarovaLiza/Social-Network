import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            <div className={s.rowWrapper}>
                <img className={s.img} src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"/>
                <textarea placeholder='Write what you wish' className={s.textarea}></textarea>
                <button className={s.button}>Publish</button>
            </div>

            <Post like={15} message={'Hi, how are you'}/>
            <Post like={20} message={'My first post'}/>
        </div>
    );
}
