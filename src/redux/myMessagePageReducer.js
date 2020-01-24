const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_ADD_MESSAGE = 'UPDATE-ADD-MESSAGE';


export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
};

export const updateAddMessageActionCreator = (text) => {

    return {type: UPDATE_ADD_MESSAGE, changeMyMessage: text}
};

const initialState = {
    my_message: [
        {user_name: 'dima', time_add: '19:23'},
        {user_name: 'petr', time_add: '15:23'},
    ],
    newMessage: 'new_message'
};


const myMessagePageReducer = (state = initialState, action) => {

    if (action.type === ADD_MESSAGE) {

        let addNewMessageObj = {
            user_name: state.newMessage,
            time_add: '14.00',
        };
        let stateCopy = {...state};
        stateCopy.my_message = [...state.my_message];
        stateCopy.my_message.push(addNewMessageObj);
        stateCopy.newMessage = '';
        return stateCopy

    } else if (action.type === UPDATE_ADD_MESSAGE) {
        let stateCopy = {...state};

        stateCopy.newMessage = action.changeMyMessage;
        return  stateCopy
    }

    return state
};

export default myMessagePageReducer;