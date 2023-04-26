import { DialogItem } from "../DialogItem/DialogItem";
import { Message } from "../Message/Message";
import s from "./Dialogs.module.css";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <DialogItem name={"Bob"} id={1} />
        <DialogItem name={"Alex"} id={2} />
        <DialogItem name={"Ann"} id={3} />
      </div>
      <div className={s.messages}>
        <Message message={'Hi!'}/>
				<Message message={'How are your doing?'}/>
				<Message message={'Yo'}/>
      </div>
    </div>
  );
};
