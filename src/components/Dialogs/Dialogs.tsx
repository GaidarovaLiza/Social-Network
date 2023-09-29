import {DialogItem} from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {MessageItem} from "./MessageItem/MessageItem";
import React, {ChangeEvent, useState} from "react";
import {DialogHeader} from "./DialogHeader/DialogHeader";
import {MessagesType, UsersType} from "app/App";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "Redax/store";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import {dialogsActions} from "Redax/Reducers/dialogsReducer";

export const Dialogs = () => {
    let dialogs = useSelector<AppRootStateType, MessagesType>(state => state.dialogs)
    let users = useSelector<AppRootStateType, UsersType>(state => state.UsersChatReducer)

    const dispatch = useDispatch()
    const [newMessage, setNewMessage] = useState("");

    const ElementsDialogItem = users.map(el => <DialogItem id={el.id} name={el.name}/>)
    const ElementsMessageItem = dialogs.map(m => {
        return (<MessageItem key={m.id} id={m.id} message={m.message}/>)
    })

    const sendMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.currentTarget.value);
    };

    const sendMessage = () => {
        if (newMessage.trim()) {
            dispatch(dialogsActions.addMessage({message: newMessage}));
            setNewMessage("");
        }
    };

    return (
        <div className={s.mainWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {ElementsDialogItem}
                </div>
                <div className={s.messages}>
                    <DialogHeader/>
                    <div className={s.messagesContainer}>
                        {ElementsMessageItem}
                    </div>
                </div>
            </div>
            <div className={s.messageInputContainer}>
                <input value={newMessage}
                       onChange={sendMessageHandler}
                       type="text"
                       placeholder="Напишите сообщение..."/>
                <Button variant="contained"
                        endIcon={<SendIcon/>}
                        onClick={sendMessage}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};
