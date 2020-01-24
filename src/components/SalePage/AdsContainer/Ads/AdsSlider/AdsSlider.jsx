import React from 'react';
import s from './AdsSlider.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AdsSlider = (props) => {
    return (
        <div className={s.ads_slider}>
            <div className={s.slide_main}>
                <img className={s.photo}
                     src={props.photo}
                     alt="this machine is best"/>
            </div>
            <div className={s.button_slider}>
                <div className={s.left}>
                    <a href="#">
                        <FontAwesomeIcon icon={"arrow-left"}/>
                    </a>

                </div>
                <div className={s.right}>
                    <a  href="#">
                        <FontAwesomeIcon icon={"arrow-right"}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default AdsSlider;