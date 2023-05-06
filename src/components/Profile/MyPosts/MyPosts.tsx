import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ChangeEvent, useState} from "react";
import {PostsType} from "../../../App";

type PropsType = {
    posts: PostsType
    addPost: (body: string) => void
}

export function MyPosts(props: PropsType) {
    const [value, setValue] = useState('')


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.addPost(value)
        setValue('')
    }

    const postComponents = props.posts.map(el => {
        return (
            <div>
                <Post body={el.body} like={el.likes} name={el.name}/>
            </div>
        )
    })

    return (
        <div>
            <div className={s.rowWrapper}>
                <img className={s.img} src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"/>
                <textarea value={value} onChange={onChangeHandler} placeholder='Write what you wish'
                          className={s.textarea}></textarea>
                <button onClick={onClickHandler} className={s.button}>Publish
                </button>
            </div>
            {postComponents}
        </div>
    );
}
