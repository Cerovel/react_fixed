import React from "react";
import {
    fileAddActionCreator,
    updateMusoraTextActionCreator
} from "../../../redux/MusoraPageReducer";
import FileAdd from "./FileAdd/FileAdd";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        newPostTextMP: state.Musora_page.newPostTextMP,
        car_modelMP: state.Musora_page.car_modelMP,
        commentsMP: state.Musora_page.commentsMP

    }
};

let mapDispsatchToProps = (dispatch) => {

    return {
        FileAdd: () => {
            dispatch(fileAddActionCreator())
        },

        UpdatePostMP: (text, car, comments) => {
            debugger
            dispatch(updateMusoraTextActionCreator(text, car, comments));
        },


    }
};

const FileAddContainer = connect(mapStateToProps, mapDispsatchToProps)(FileAdd);

export default FileAddContainer