import React from 'react';

import Addfile from "../../Reused_components/AddFile/Addfile";
import {addPostNewsPageActionCreate, updatePostNPActionCreate} from "../../../redux/newsPageReducer";
import {connect} from "react-redux";


let stateToProps = (state) => {
    return {
        newPostText: state.News_page.newPostTextNP
    }
};
let dispatchToProps = (dispatch) => {
    return {
        addPost: () => {
          dispatch(addPostNewsPageActionCreate())
        },
        UpdatePost: (text) => {
            dispatch(updatePostNPActionCreate(text))
        }
    }
};
    const NPAddfileContainer = connect(stateToProps, dispatchToProps)(Addfile);



export default NPAddfileContainer