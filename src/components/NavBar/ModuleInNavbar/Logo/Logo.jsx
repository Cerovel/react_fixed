import React from 'react';
import s from './Logo.module.sass'



const Logo = () => {
    return (
        <div className={s.logo}>
            <img src="https://cdn1.savepice.ru/uploads/2019/11/19/8b2f585532cb5553d2bd9c120e3fca36-full.png"
                 alt=""/>
        </div>
    )
}
export default Logo;