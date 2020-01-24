import React from "react";
import {connect} from "react-redux";
import MyPagePost from "./MyPagePost/MyPagePost";


    let mapStateToProps = (state) => {
        return {
            page_post: state.My_page.page_post
        }
    };

    const MyPagePostContainer = connect(mapStateToProps)(MyPagePost);

    export default MyPagePostContainer;