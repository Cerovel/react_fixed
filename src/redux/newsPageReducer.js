const ADD_POST_NEWS_PAGE = 'ADD-POST-NEWS-PAGE';
const UPDATE_POST_NP = 'UPDATE-POST-NP';


const initialState = {
    news_page: [
        {
            head_name: 'Здорова',
            user_name: 'Василий',
            user_time: '14:33',
            user_ava: 'https://docusaurus.io/img/users/accord-project.png',
            picture_main: 'https://ichef.bbci.co.uk/news/640/media/images/80557000/jpg/_80557927_80557926.jpg',
            picture_desc: 'run forest run',
            like: 1,
            comment: 3
        },
    ],
    newPostTextNP: 'NewsPage'
};


const newsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_POST_NP:
            return {
                ...state,
                newPostTextNP: action.change
            };
        case ADD_POST_NEWS_PAGE:

            let objNewsPage = {
                head_name: state.newPostTextNP,
                user_name: 'Василий',
                user_time: '14:33',
                user_ava: 'https://docusaurus.io/img/users/accord-project.png',
                picture_main: 'https://ichef.bbci.co.uk/news/640/media/images/80557000/jpg/_80557927_80557926.jpg',
                picture_desc: 'run forest run',
                like: 1,
                comment: 3
            };
            return {
                ...state,
                news_page: [...state.news_page, objNewsPage],
                newPostTextNP: ''
            }
    }

    return state
};

export let addPostNewsPageActionCreate = () => {
    return {
        type: ADD_POST_NEWS_PAGE,
    }
};

export let updatePostNPActionCreate = (text) => {
    return {
        type: UPDATE_POST_NP,
        change: text
    }
};

export default newsPageReducer

