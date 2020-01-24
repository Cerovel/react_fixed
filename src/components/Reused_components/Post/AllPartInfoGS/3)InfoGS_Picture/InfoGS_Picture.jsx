import React from 'react';

import s from './InfoGS_Picture.module.sass' //основные стили


const InfoGS_Picture = (props) => {
     return (
            <div className={s.picture_gai}>
                <img src={props.picture} alt=""/>
            </div>
    )
};

export default InfoGS_Picture;