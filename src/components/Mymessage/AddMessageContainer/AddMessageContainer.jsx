import React from 'react';

import {connect} from "react-redux";
import AddMessage from "../AddMessage/AddMessage";
import {addMessageActionCreator, updateAddMessageActionCreator} from "../../../redux/myMessagePageReducer";


let mapStateToProps = (state) => {
  return {
      newMessage: state.MyMessagePage.newMessage
  }
};

let dispatchToProps = (dispatch) => {
  return {
      addMesageInaction: () => {
          dispatch(addMessageActionCreator())
      },
      changeMessage: (text) => {
          dispatch(updateAddMessageActionCreator(text))
      }

  }
};


const AddMessageContainer = connect(mapStateToProps,dispatchToProps)(AddMessage);




export default AddMessageContainer
