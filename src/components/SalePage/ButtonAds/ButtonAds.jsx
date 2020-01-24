import React from 'react';
import s from './ButtonAds.module.sass'


const ButtonAds = () => {
    return (
        <div className={s.button_ads}>
            <a className={s.link_ads} href="#">+ Я хочу добавить обьявление</a>
        </div>
    )
};

export default ButtonAds;