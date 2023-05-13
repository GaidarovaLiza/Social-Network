type MessagePropsType = {
    message: string
    id: string
}

export const MessageItem = (props: MessagePropsType) => {
    return (
        <div key={props.id}>{props.message}</div>
    )
}

