import React, {useState} from 'react';
import s from './Like.module.css'

type LikePropsType = {
    like: number
}

const Like = (props: LikePropsType) => {
    const [likes, setLikes] = useState(props.like)

    const onClickHandler = () => {
        if (likes === 0) {
            setLikes(1);
        } else {
            setLikes(0);
        }
    };

    return (
        <div className={s.likesWrapper}>
            <div className={s.likesNum}>{likes}</div>
            {likes === 0 ? (
                <img
                    onClick={onClickHandler}
                    className={s.imgInitial}
                    src="https://1.bp.blogspot.com/-4pc0ihXaY1Y/YHt0gPmCY0I/AAAAAAAANUw/BKslMmfLjSs7tfSIDjyr_M1w2WSNE_JPgCLcBGAsYHQ/s1200/889140.png"
                    alt=""
                />
            ) : (
                <img
                    onClick={onClickHandler}
                    className={s.img}
                    src="https://i.ibb.co/thX3jZq/15.png"
                    alt=""
                />
            )}
        </div>
    );
};

export default Like;