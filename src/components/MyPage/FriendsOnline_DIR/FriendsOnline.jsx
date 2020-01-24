import React from 'react';
import FriendsOnST from './FriendsOnline.module.sass'
const FriendsOnline = () => {
    return(
        <div className={FriendsOnST.friends_online}>
            <div><span>Друзья онлайн <a href="#">20</a></span></div>
            <div>2</div>
            <div>3</div>
            <div>Катя</div>
            <div>Саша</div>
            <div>3</div>
            <div>4</div>
            <div>Таня</div>
            <div>Маша.</div>
        </div>
    )
};

export default FriendsOnline;