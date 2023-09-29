import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React, {ChangeEvent, useState} from "react";
import {PostsType} from "app/App";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "Redax/store";
import {postsActions} from "Redax/Reducers/postsReducer";

export const MyPosts = () => {
    const [value, setValue] = useState('')
    let posts = useSelector<AppRootStateType, PostsType>(state => state.posts)
    const dispatch = useDispatch()

    const addPost = (body: string) => {
        dispatch(postsActions.addPost({body: body}))
    }

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
                <Button onClick={onClickHandler}> Publish</Button>
            </div>
            {postComponents}
        </div>
    );
}
