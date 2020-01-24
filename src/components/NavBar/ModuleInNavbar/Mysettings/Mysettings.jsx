import React from 'react';
import s from './Mysettings.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Mysettings = () => {
    return (
        <div className={s.mysettingsgrid}>
            <NavLink className={s.mysettings} to="/settings" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"sleigh"}/>
                </span>Участники
            </NavLink>

        </div>
    )
};
export default Mysettings;

