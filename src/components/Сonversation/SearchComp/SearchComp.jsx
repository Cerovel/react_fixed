import React from "react";
import s from './SearchComp.module.sass'

const SearchComp = () => {
    return (
        <div className={s.search_block__grid}>
            <input className={s.search_area} type="text"
            placeholder='Поиск товарища'
            />
        </div>
    )
};

export default SearchComp