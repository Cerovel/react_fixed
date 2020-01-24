import React from 'react';
import s from './Mypage.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Mypage = () => {
    return (
        <div className={s.mypagegrid}>
            <NavLink className={s.mypage} to="/mypage" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"home"}/>
                </span>Моя страница
            </NavLink>
        </div>
    )
}
export default Mypage;