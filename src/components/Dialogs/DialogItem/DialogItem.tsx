import {NavLink} from "react-router-dom";
import s from './DialogItem.module.css'

type PropsDialogItemType = {
    name: string;
    id: string;
};

export const DialogItem = (props: PropsDialogItemType) => {
    const path = "/dialogs/" + props.id;
    return (
        <div className={s.chatContainer}>
            <ul className={s.messageList}>
                <li className={s.message}>
                    <img className={s.avatar} src="https://inspectorclub.com/user_images/empty-image.png"/>
                    <div className={s.messageContent}>
                        <NavLink className={s.username} to={path}>{props.name}</NavLink>
                        <div className={s.messageText}>Текст сообщения</div>
                        <div className={s.time}>12:34 PM</div>
                    </div>
                </li>
                {/*Добавьте другие сообщения здесь*/}
            </ul>
        </div>


    );
};

