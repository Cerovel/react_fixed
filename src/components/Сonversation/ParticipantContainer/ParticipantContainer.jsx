import React from "react";
import {connect} from "react-redux";
import {followAC, setUserAC, unFollowAC} from "../../../redux/ConversationReducer";
import Participant from "./Participant/Participant";

let mapStateToProps = (state) => {
    return {
        users: state.ConversationPage.users,
        isFetching: state.ConversationPage.isFetching,
    }
};



                                                        //  ↓↓↓ это mapDispatchToProps ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ //
const ParticipantContainer = connect(mapStateToProps, {follow: followAC, unfollow: unFollowAC, setUsers: setUserAC,})(Participant);

export default ParticipantContainer;