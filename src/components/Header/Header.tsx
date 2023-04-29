import s from "./Header.module.css";

export function Header() {
    return (
        <header className={s.header}>
            <span className={s.logo}>Friends Finder</span>
            <input placeholder={'Search friends'} className={s.input} type="text"/>
        </header>
    );
}
