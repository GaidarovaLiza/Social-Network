import {DialogItem} from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import {v1} from "uuid";
import {MessageItem} from "./MessageItem/MessageItem";

export const Dialogs = () => {

    const users = [
        {id: v1(), name: 'Bob'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Ann'},
    ]

    const messages = [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'How are you doing?'},
        {id: v1(), message: 'Yo!'},
    ]

    const ElementsDialogItem = users.map(el => <DialogItem id={el.id} name={el.name}/>)
    const ElementsMessageItem = messages.map(m => {
        return (<MessageItem id={m.id} message={m.message}/>)
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {ElementsDialogItem}
            </div>
            <div className={s.messages}>
                {ElementsMessageItem}
            </div>
        </div>
    );
};
