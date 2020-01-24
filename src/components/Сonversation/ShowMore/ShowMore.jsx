import React from "react";
import s from './ShowMore.module.sass'

const ShowMore = () => {
    return (
        <div className={s.show_more_grid}>
           <button className={s.show_more}>
               Show more
           </button>
        </div>
    )
};
export default  ShowMore