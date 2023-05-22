import {DialogItem} from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {MessageItem} from "./MessageItem/MessageItem";
import React from "react";
import {DialogType} from "../../Redax/State";
import {DialogHeader} from "./DialogHeader/DialogHeader";

type DialogsPropsType = {
    state: DialogType
}

export const Dialogs: React.FC<DialogsPropsType> = (
    {
        state
    }
) => {

    const ElementsDialogItem = state.users.map(el => <DialogItem id={el.id} name={el.name}/>)
    const ElementsMessageItem = state.messages.map(m => {
        return (<MessageItem id={m.id} message={m.message}/>)
    })

    return (
        <div className={s.mainWrapper}>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {ElementsDialogItem}
                </div>
                <div className={s.messages}>
                    <DialogHeader/>
                    {ElementsMessageItem}
                </div>
            </div>
            <div className={s.messageInputContainer}>
                <input type="text" placeholder="Напишите сообщение..."/>
                <button className={s.sendButton}>Отправить</button>
            </div>
        </div>
    );
};
