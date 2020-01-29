import React, {Component} from "react";
import s from './Pagination.module.sass'
import * as axios from "axios";


class Pagination extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); // pagesCount = 10
        let pages = [];
        let currentPage = this.props.currentPage

            for (let i = 1; i <= pagesCount ; i++) {
                pages.push(i)
            }


        return <div className={s.pagination_part}>
            {pages.map(p => {
                return <a onClick={(e) => {this.onPageChanged(p)}} className={this.props.currentPage === p && s.selected_pagination}>

                    {p}
                </a>
            })}
        </div>

    }
}

export default Pagination