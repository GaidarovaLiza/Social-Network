import s from "./Post.module.css";

type PostPropsType = {
    message: string;
    like: number;
};

export function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <img className={s.postAvatar}
                     src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg" alt="User avatar"/>
                <div>
                    <div className={s.postUser}>John Doe</div>
                    <div className={s.postTimestamp}>2 hours ago</div>
                </div>
            </div>
            <div className={s.postContent}>
                {props.message}
            </div>
            <div className={s.postFooter}>
                <div className={s.postLikes}>{`${props.like} likes`}</div>
                <form className={s.postCommentForm}>
                    <input className={s.postComment} type="text" placeholder="Add a comment..."/>
                    <button className={s.postCommentButton} type="submit">Comment</button>
                </form>
            </div>
        </div>
    );
}
