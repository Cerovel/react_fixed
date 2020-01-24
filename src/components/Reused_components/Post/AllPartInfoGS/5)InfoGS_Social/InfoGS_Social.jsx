import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './InfoGS_Social.module.sass' //основные стили

const InfoGS_Social = (props) => {
    return (

            <div className={s.social_elements}>
                <div><FontAwesomeIcon icon='heart'/></div>
                <div>{props.likes} </div>
                <div><FontAwesomeIcon icon='comment-alt'/></div>
                <div> {props.comments}</div>
            </div>
    )
};

export default InfoGS_Social;