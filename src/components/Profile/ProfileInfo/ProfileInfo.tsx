import {useAppDispatch, useAppSelector} from "../../../Redax/store";
import {useEffect} from "react";
import {getUserTC} from "../../../Redax/Reducers/userPage-reducer";

export const ProfileInfo = () => {
    const user = useAppSelector(state => state.userPageReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await dispatch(getUserTC('15'));
            } catch (error) {
                // Обработка ошибки, если необходимо
            }
        };
    }, [user]);

    console.log(user.fullName)

    return (
        <div>
            {/*<p>{user.fullName}</p>*/}
            {/*<li>{user.contacts.facebook}</li>*/}
            {/*<li>{user.contacts.vk}</li>*/}
            {/*<li>{user.contacts.github}</li>*/}
            {/*<li>{user.contacts.instagram}</li>*/}
            {user.userId}
        </div>
    );
};
