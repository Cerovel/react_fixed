import React, {Component} from "react";
import * as axios from "axios";
import Pagination from "./Pagination/Pagination";
import Preloader from "../../../common/preloader/preloader";


class PaginationAPIComponent extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);

            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false)
            });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}

            <Pagination pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
            />
        </>

    }
}

export default PaginationAPIComponent