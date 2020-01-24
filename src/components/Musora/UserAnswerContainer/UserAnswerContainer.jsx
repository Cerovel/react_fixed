import React from 'react';
 import {connect} from "react-redux";
import UserAnswerMap from "./UserAnswerMap/UserAnswerMap";


let mapStateToProps = (state) => {
    return {
        musora_page: state.Musora_page.musora_page
    }
};

const UserAnswerContainer = connect(mapStateToProps)(UserAnswerMap);




export default UserAnswerContainer;