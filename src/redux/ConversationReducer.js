const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 200,
    currentPage: 4,
    isFetching: true,
};

const ConversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };

        case SET_USER: {
            return {...state, users: [...action.users]}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.current_page}
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

export const setCurrentPageAC = (current_page) => {
    return {type: SET_CURRENT_PAGE, current_page}
};

export const toggleIsFetchingAC = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching: isFetching}
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