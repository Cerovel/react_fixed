import React from "react";
import s from './Location.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Location = () => {
    return (
        <div className={s.location_grid}>
            <input className={s.district} type="text"
            placeholder='Выбрать район'
            />
            <button className={s.search_friend}>
                <FontAwesomeIcon icon='check'/>
            </button>
            <input className={s.vilage} type="text"
            placeholder='Место жительства'
            />
        </div>
    )
};

export default Location