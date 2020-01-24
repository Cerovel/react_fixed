import React from 'react';
import s from './Friends.module.sass'

const Friends = () => {
    return (

            <div className={s.friends}>
                <div><span>Друзья <a href="#">200</a></span></div>
                <div>2</div>
                <div>3</div>
                <div>Катя</div>
                <div>Саша</div>
                <div>3</div>
                <div>4</div>
                <div>Таня</div>
                <div>Маша</div>
            </div>

    )
};

export default Friends;