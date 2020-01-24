import React from 'react';
import Addfile from "../../Reused_components/AddFile/Addfile";
import {addPostActionCreator, ChangePostActionCreator} from "../../../redux/myPageReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       newPostText: state.My_page.newPostText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        UpdatePost: (text) => {

            dispatch(ChangePostActionCreator(text))
        },

    }
};

const MyPageAddFileContainer = connect(mapStateToProps, mapDispatchToProps)(Addfile);

export default MyPageAddFileContainer;