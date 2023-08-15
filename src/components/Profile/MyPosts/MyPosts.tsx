import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, useState} from "react";
import {PostsType} from "../../../app/App";

type PropsType = {
    posts: PostsType
    addPost: (body: string) => void
}

export const MyPosts: React.FC<PropsType> = (
    {
        posts,
        addPost
    }
) => {
    const [value, setValue] = useState('')


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickHandler = () => {
        addPost(value)
        setValue('')
    }

    const postComponents = posts.map(el => {
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
