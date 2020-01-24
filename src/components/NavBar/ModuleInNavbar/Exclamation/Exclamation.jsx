import React from 'react';
import s from './Exclamation.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Exclamation = () => {
    return (
        <div className={s.exclamationgrid}>
            <NavLink className={s.exclamation} to="/gdesuki" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"exclamation-circle"}/>
                </span>Где стоят
            </NavLink>
        </div>
    )
};
export default Exclamation;