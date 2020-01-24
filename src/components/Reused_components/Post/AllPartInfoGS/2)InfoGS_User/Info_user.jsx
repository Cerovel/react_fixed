import React from 'react';
import s from './Info_user.module.sass'


const Info_user = (props) => {
    return (

            <div className={s.user_post}>
                 <div>
                     <img src={props.ava}alt=""/>
                 </div>
                <div>
                    <span>{props.user}</span>
                    <br/>
                    {props.time}
                </div>
            </div>

    )
};

export default Info_user;