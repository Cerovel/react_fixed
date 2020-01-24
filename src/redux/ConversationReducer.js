const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';

const initialState = {
    users: [],
    newPostText: 'MyPage'
};

const ConversationReducer = (state = initialState, action) => {


switch (action.type) {
    case FOLLOW:
        return  {
            ...state,
            users: state.users.map((u)=> {
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u
            })
        };


    case UNFOLLOW:
         return  {
            ...state,
            users: state.users.map((u)=> {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            })
        };

    case SET_USER: {
        return {...state, users: [...state.users, ...action.users]}
    }



    default:
        return state
}

};

export const followAC = (userID) => {
    return {type: FOLLOW, userID}
};
export const unFollowAC = (userID) => {
    return {type: UNFOLLOW, userID}
};
export const setUserAC = (users) => {
    return {type: SET_USER, users}
};

export default ConversationReducer;


// Старый код если не пойму
// const ADD_POST = 'ADD-POST';
// const CHANGES_POST = 'CHANGES-POST';
// export const addPostActionCreator = () => {
//     return {type: ADD_POST}
// };
//
// export const ChangePostActionCreator = (text) => {
//     return {type: CHANGES_POST, change: text}
// };
//
// const myPageReducer = (state, action) => {
//
//
//     if (action.type === ADD_POST) {
//         let objMyPage = {
//             head: state.newPostText, user: 'dima', time: '14:12',
//             ava: 'https://web-mastery.info/up/design/img/smiles/big-smile/smile-6.png',
//             picture: 'https://cosmos-images2.imgix.net/file/spina/photo/18032/190218-mount-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
//             desc: 'some word',
//             like: '1',
//             comment: '2'
//         };
//
//         state.page_post.push(objMyPage);
//         state.newPostText = ''
//
//
//     } else if (action.type === CHANGES_POST) {
//         debugger
//         state.newPostText = action.change;
//     }
//     return state
// };
//
// export default myPageReducer;