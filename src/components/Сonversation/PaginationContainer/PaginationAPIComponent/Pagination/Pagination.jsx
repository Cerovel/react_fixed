import React from "react";
import s from "../Pagination.module.sass";

const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // pagesCount = 10
    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        pages.push(i)
    }


    return <div className={s.pagination_part}>
        {pages.map(p => {
            return <a onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && s.selected_pagination}>
                {p}
            </a>
        })}
    </div>

};

export default Pagination;
