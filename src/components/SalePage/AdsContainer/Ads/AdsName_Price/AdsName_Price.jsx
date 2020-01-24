import React from 'react';
import s from './AdsName_Price.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AdsName_Price = (props) => {
    return (
        <div className={s.adsname}>
         <div className={s.name}> {props.brand_name}</div>
            <div className={s.price}>
                {props.price} <span><FontAwesomeIcon icon={"ruble-sign"}/></span>
            </div>
        </div>
    )
};

export default AdsName_Price;