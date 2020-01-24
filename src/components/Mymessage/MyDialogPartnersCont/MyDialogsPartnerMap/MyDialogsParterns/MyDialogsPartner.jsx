import React from 'react';
import s from './MyDialogsPartner.module.sass'
import {NavLink} from "react-router-dom";

const MyDialogsPartner = (props) => {


    return (
        <div className={s.dialogs_grid}>
            <div className={s.user_photo}>
                <img src="https://static-s.aa-cdn.net/img/ios/1099105909/dc1c3d2a016204900007acb9e5e3864e" alt=""/>
            </div>
            <NavLink to={'/message/' + props.id} className={s.user_name}>
                {props.user_name}
            </NavLink>
            <div className={s.message_add_time}>
                {props.time_add}
            </div>

        </div>
    )
};
export default MyDialogsPartner
