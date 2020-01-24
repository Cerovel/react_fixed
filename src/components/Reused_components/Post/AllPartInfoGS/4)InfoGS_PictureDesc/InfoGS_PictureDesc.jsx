import React from 'react';
import s from './InfoGS_PictureDesc.module.sass' //основные стили


const InfoGS_PictureDesc = (props) => {
    return (
            <div className={s.picture_description}>
                 {props.desc}
            </div>

    )
};

export default InfoGS_PictureDesc;