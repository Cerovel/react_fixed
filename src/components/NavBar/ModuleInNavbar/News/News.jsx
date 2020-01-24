import React from 'react';
import s from './News.module.sass'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const News = () => {
    return (
        <div className={s.newsgrid}>
            <NavLink className={s.news} to="/news" activeClassName={s.activelink}>

                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"newspaper"}/>
                </span>
                Новости
            </NavLink>
        </div>
    )
};
export default News;