import React from 'react';
import {connect} from "react-redux";
import MyDialogsPartnerMap from "./MyDialogsPartnerMap/MyDialogsPartnerMap";

const mapStateToProps = (state) => {
    return {
        my_message: state.MyMessagePage.my_message
    }
};



const MyDialogsPartnerContainer = connect(mapStateToProps)(MyDialogsPartnerMap)
export default MyDialogsPartnerContainer
