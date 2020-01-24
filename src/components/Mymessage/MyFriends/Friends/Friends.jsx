import React from 'react';
import s from './Friends.module.sass'
import {NavLink} from "react-router-dom";

const Friends = () =>  {
    return (
        <NavLink to='/message/1' className={s.friends}>
            <div className={s.status}>
                -
            </div>
            <div className={s.user_name}>
                Санек
            </div>
        </NavLink>
    )
};

export default Friends;