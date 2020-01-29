import React from "react";
import s from './Participant.module.sass'
import * as axios from 'axios'
import userphoto from '../../../../assets/images/userphoto.png'

const Participant = (props) => {

    if(props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            props.setUsers(response.data.items)
        });

    }
    return <div className={s.participant_grid}>
        {props.users.map((u) => {
            return <div key={u.id} className={s.participant}>
                <img className={s.name_ava} src={u.photos.small != null ? u.photos.small : userphoto} alt=""/>
                <div className={s.name}>{u.name}</div>

                {u.followed ? <button onClick={()=> props.unfollow(u.id)} className={s.follow_style}>follow</button> :
                    <button onClick={()=> props.follow(u.id)}  className={s.unfollow_style}>unfollow</button>}

            </div>
        })}
    </div>
};
export default Participant


