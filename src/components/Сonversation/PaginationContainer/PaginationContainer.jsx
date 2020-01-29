import React from "react";
import {connect} from "react-redux";
import Pagination from "./Pagination/Pagination";
import {setCurrentPageAC, setUserAC,} from "../../../redux/ConversationReducer";


let mapStateToProps = (state) => {
    return {
        pageSize: state.ConversationPage.pageSize,
        totalUsersCount: state.ConversationPage.totalUsersCount,
        currentPage: state.ConversationPage.currentPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (current_page) => {
            dispatch(setCurrentPageAC(current_page))
        }

    }
};

const PaginationContainer = connect(mapStateToProps,mapDispatchToProps)(Pagination);



export default PaginationContainer