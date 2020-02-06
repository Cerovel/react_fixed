import React, {Component} from "react";

import * as axios from "axios";
import Pagination from "./Pagination/Pagination";


class PaginationAPIComponent extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    };

    render() {

        return <Pagination pageSize={this.props.pageSize}
                           totalUsersCount={this.props.totalUsersCount}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                />

    }
}

export default PaginationAPIComponent