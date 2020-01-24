import React from 'react';
import s from './User.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const User = () => {
    return (
        <div className={s.usergrid}>
            <NavLink className={s.user} to="/sale" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"money-bill"}/>
                </span>Продаю, покупаю
            </NavLink>
        </div>
    )
};
export default User;