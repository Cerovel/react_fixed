import React from 'react';
import s from './AdsNumber.module.sass'


const AdsNumber = (props) => {
    return (
        <div className={s.ads_number}>
            <div className={s.card}>
                <div className={s.front}><span>Номер телефона</span></div>
                <div className={s.back}><span>{props.phone_numb}</span></div>
            </div>
        </div>
    )
};

export default AdsNumber;