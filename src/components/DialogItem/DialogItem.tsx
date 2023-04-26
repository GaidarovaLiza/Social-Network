import { NavLink } from "react-router-dom";

type PropsDialogItemType = {
  name: string;
  id: number;
};

export const DialogItem = (props: PropsDialogItemType) => {
  const path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

