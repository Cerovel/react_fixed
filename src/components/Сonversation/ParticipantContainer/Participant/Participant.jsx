import React from "react";
import s from './Participant.module.sass'
import userphoto from '../../../../assets/images/userphoto.png'
import {NavLink} from "react-router-dom";

function Participant(props) {

    return <div className={s.participant_grid}>
        {props.users.map((u) => {
            return <div key={u.id} className={s.participant}>
                <NavLink className={s.avatarka} to={'/mypage/' + u.id}>
                    <img className={s.name_ava} src={u.photos.small != null ? u.photos.small : userphoto} alt=""/>
                </NavLink>
                <div className={s.name}>{u.name}</div>

                {u.followed ?
                    <button onClick={() => props.unfollow(u.id)} className={s.follow_style}>follow</button> :
                    <button onClick={() => props.follow(u.id)} className={s.unfollow_style}>unfollow</button>}

            </div>
        })}

    </div>
}

export default Participant


