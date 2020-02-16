import React from "react";
import {connect} from "react-redux";
 import {setCurrentPageAC, setUserAC, toggleIsFetchingAC,} from "../../../redux/ConversationReducer";
import PaginationAPIComponent from "./PaginationAPIComponent/PaginationAPIComponent";


let mapStateToProps = (state) => {
    return {
        pageSize: state.ConversationPage.pageSize,
        totalUsersCount: state.ConversationPage.totalUsersCount,
        currentPage: state.ConversationPage.currentPage,
        isFetching: state.ConversationPage.isFetching
    }
};



const PaginationContainer = connect(mapStateToProps,{setUsers: setUserAC, setCurrentPage: setCurrentPageAC, toggleIsFetching: toggleIsFetchingAC})(PaginationAPIComponent);



export default PaginationContainer