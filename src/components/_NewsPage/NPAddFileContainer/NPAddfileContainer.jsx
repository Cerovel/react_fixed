import React from 'react';

import Addfile from "../../Reused_components/AddFile/Addfile";
import {addPostNewsPageActionCreate, updatePostNPActionCreate} from "../../../redux/newsPageReducer";
import {connect} from "react-redux";


let stateToProps = (state) => {
    return {
        newPostText: state.News_page.newPostTextNP
    }
};

    const NPAddfileContainer = connect(stateToProps, {addPost: addPostNewsPageActionCreate, UpdatePost: updatePostNPActionCreate})(Addfile);



export default NPAddfileContainer