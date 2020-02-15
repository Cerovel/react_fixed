import React from 'react';
import Addfile from "../../Reused_components/AddFile/Addfile";
import {addPostActionCreator, ChangePostActionCreator} from "../../../redux/myPageReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
       newPostText: state.My_page.newPostText
    }
};

const MyPageAddFileContainer = connect(mapStateToProps, {addPost: addPostActionCreator, UpdatePost: ChangePostActionCreator })(Addfile);

export default MyPageAddFileContainer;