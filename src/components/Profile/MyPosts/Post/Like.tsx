import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import s from './Like.module.css'
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const Like = () => {
    return (
        <div className={s.likesWrapper}>
            <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
        </div>
    );
};

export default Like;