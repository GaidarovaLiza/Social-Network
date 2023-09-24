type MessagePropsType = {
    message: string;
};

export const Message = (props: MessagePropsType) => {
    return <div>{props.message}</div>;
};
