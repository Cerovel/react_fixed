import React from 'react';
import s from './AdsDesc.module.sass'


const AdsDesc = (props) => {

    return (
        <div className={s.ads_desc}>
           <div className={s.desc_head}>
               {props.desc_header}
           </div>
           <div className={s.condition}>
            состояние: <span>{props.condition}</span>
           </div>
           <div className={s.old}>
                Год: {props.year}
           </div>
           <div className={s.description}>
             {props.desc}
           </div>
        </div>
    )
};

export default AdsDesc;