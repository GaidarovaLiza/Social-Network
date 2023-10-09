import {useAppDispatch, useAppSelector} from "Redax/store";
import {useEffect} from "react";
import {getUserTC} from "Redax/Reducers/userPage-reducer";
import s from "components/Profile/MyPosts/MyPosts.module.css";

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
        <div className="profile">
            <div className="profile-header">
                <img className={s.img} src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"
                     alt="Profile Picture"/>
                <p>Artem Skakun</p>
                <p>About me: let's do that)</p>
                <p>Job: react redux css html</p>
            </div>
            <div className="profile-contacts">
                <p>Contacts:</p>
                <div>
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://vk.com">VK</a>
                    <a href="https://twitter.com">Twitter</a>
                    <a href="https://www.instagram.com">Instagram</a>
                    <a href="https://github.com">GitHub</a>
                </div>
            </div>
        </div>
    );
};
