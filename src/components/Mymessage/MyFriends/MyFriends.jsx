import React from 'react';
import s from './MyFriends.module.sass'
import Friends from "./Friends/Friends";

const MyFriends = () =>  {
    return (
        <div className={s.friends_frame}>
            <Friends/>
            <Friends/>
            <Friends/>
            <Friends/>
            <Friends/>
            <Friends/>
            <Friends/>

        </div>
    )
};

export default MyFriends;