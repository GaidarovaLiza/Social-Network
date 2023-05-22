import s from './DialogHeader.module.css'

export const DialogHeader = () => {
    return (
        <div className={s.dialogHeader}>
            <div className={s.avatarContainer}>
                <img className={s.avatar}
                     src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"/>
            </div>
            <div className={s.userInfo}>
                <h2 className={s.username}>Имя пользователя</h2>
                <span className={s.status}>Online</span>
            </div>
            <div className={s.menu}>
                <button className={s.menuButton}><i className={s.faFaEellipsis}></i></button>
            </div>
        </div>
    );
};