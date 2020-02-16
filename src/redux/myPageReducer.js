const ADD_POST = 'ADD-POST';
const CHANGES_POST = 'CHANGES-POST';
const USERS_PAGE = 'USERS_PAGE';

const initialState = {
    page_post: [
        {
            head: 'more more', user: 'dima', time: '14:12',
            ava: 'https://web-mastery.info/up/design/img/smiles/big-smile/smile-6.png',
            picture: 'https://cosmos-images2.imgix.net/file/spina/photo/18032/190218-mount-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
            desc: 'some word',
            like: '1',
            comment: '2'
        }
    ],
    newPostText: 'MyPage',
    users_page: []
};

const myPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGES_POST:
            return {
                ...state,
                newPostText: action.change
            };
        case ADD_POST:
            let objMyPage = {
                head: state.newPostText, user: 'dima', time: '14:12',
                ava: 'https://web-mastery.info/up/design/img/smiles/big-smile/smile-6.png',
                picture: 'https://cosmos-images2.imgix.net/file/spina/photo/18032/190218-mount-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
                desc: 'some word',
                like: '1',
                comment: '2'
            };
            return {
                ...state,
                page_post: [...state.page_post, objMyPage],
                newPostText: '',
            };
        case USERS_PAGE:
            return  {
                ...state,
                users_page: [action.user]
            }

    }

    return state
};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const ChangePostActionCreator = (text) => {
    return {type: CHANGES_POST, change: text}
};
export const UserPageAC = (user) => {
    return {type: USERS_PAGE, user: user }
};

export default myPageReducer;



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