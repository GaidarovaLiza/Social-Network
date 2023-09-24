import s from './MessageItem.module.css'

type MessagePropsType = {
    message: string
    id: string
}

export const MessageItem = (props: MessagePropsType) => {
    return (
        <div>
            <div className={s.wrapper}>
                <img className={s.avatar} src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"
                     alt="User avatar"/>
                <div className={s.message} key={props.id}>{props.message}</div>
            </div>

        </div>
    )
}

