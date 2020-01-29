import React from "react";
import {connect} from "react-redux";
import {followAC, setUserAC, unFollowAC} from "../../../redux/ConversationReducer";
import Participant from "./Participant/Participant";

let mapStateToProps = (state) => {
    return {
        users: state.ConversationPage.users,



    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUserAC(users))
        }

    }
};


const ParticipantContainer = connect(mapStateToProps, mapDispatchToProps)(Participant);

export default ParticipantContainer;