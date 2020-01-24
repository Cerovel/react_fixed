
import React from 'react';
import s from './Head_Description.module.sass'

const Head_Description = (props) => {


    return (

            <div className={s.main_head}>
                {props.head_title}
            </div>
    )
};

export default Head_Description;