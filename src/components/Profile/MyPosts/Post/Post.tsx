import s from "./Post.module.css";
import Like from "./Like";

type PostPropsType = {
    body: string;
    like: number;
    name: string
};

export function Post(props: PostPropsType) {

    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <img className={s.postAvatar}
                     src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg" alt="User avatar"/>
                <div>
                    <div className={s.postUser}>{props.name}</div>
                    <div className={s.postTimestamp}>2 hours ago</div>
                </div>
            </div>
            <div className={s.postContent}>
                {props.body}
            </div>
            <div className={s.postFooter}>
                <Like like={props.like}/>
                <form className={s.postCommentForm}>
                    <input className={s.postComment} type="text"
                           placeholder="Add a comment..."/>
                    <button className={s.postCommentButton} type="submit">Comment</button>
                </form>
            </div>
        </div>
    );
}
