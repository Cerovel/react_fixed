import React from 'react';
import s from './Message.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const  Message = () => {
    return (
        <div className={s.messagegrid}>
            <NavLink className={s.message} to ="/message" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"envelope"}/>
                </span>Мои сообщения
            </NavLink>
        </div>
    )
};
export default Message;