import React from 'react';
import s from './Maps.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const Maps = () => {
    return (
        <div className={s.mapsgrid}>
            <NavLink className={s.maps} to="/maps" activeClassName={s.activelink}>
                <span className={s.icon_set}>
                    <FontAwesomeIcon icon={"map-marker-alt"}/>
                </span>Шулганово
            </NavLink>
        </div>
    )
};
export default Maps;