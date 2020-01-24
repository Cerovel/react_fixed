import React from 'react';
import s from './Admin.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Admin = () => {
    return (
        <div className={s.admingrid}>
            <NavLink className={s.admin} to="/admin" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"baby"}/>
                </span>Модератор
            </NavLink>
        </div>
    )
};
export default Admin;