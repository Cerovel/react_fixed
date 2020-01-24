const MUSORA_PAGE_ADD = 'MUSORA-PAGE-ADD';
const UPDATE_MUSORA_TEXT = 'UPDATE-MUSORA-TEXT';
const UPDATE_MUSORA_CAR = 'UPDATE-MUSORA-CAR';


const initialState = {
    musora_page: [
        {
            user_image: 'https://sun9-62.userapi.com/c848520/v848520759/19d657/ccBO6hZAHx8.jpg?ava=1',
            user_name: 'Рустам',
            time_warning: '18:30',
            where_they: 'fd',
            car_model: 'car_model',
            comment_musor: 'comment',
            photo_musor_page: 'https://images.unsplash.com/photo-1577266694370-a0c70c056205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        },
        {
            user_image: 'https://sun9-62.userapi.com/c848520/v848520759/19d657/ccBO6hZAHx8.jpg?ava=1',
            user_name: 'Рустам',
            time_warning: '18:30',
            where_they: 'fd',
            car_model: 'car_model',
            comment_musor: 'comment',
            photo_musor_page: 'https://images.unsplash.com/photo-1577266694370-a0c70c056205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        }
    ],
    newPostTextMP: 'ff',
    car_modelMP: 'vaz-2110',
    commentsMP: 'i am from in Russia'
};
const musoraPageReducer = (state = initialState, action) => {


    if (action.type === MUSORA_PAGE_ADD) {
        let addNewObjInMP = {
            user_image: 'https://sun9-62.userapi.com/c848520/v848520759/19d657/ccBO6hZAHx8.jpg?ava=1',
            user_name: 'Рустам',
            time_warning: '18:30',
            where_they: state.newPostTextMP,
            car_model: state.car_modelMP,
            comment_musor: state.commentsMP,
            photo_musor_page: 'https://images.unsplash.com/photo-1577266694370-a0c70c056205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        };

        let stateCopy = {...state};
        stateCopy.musora_page = [...state.musora_page];
        stateCopy.musora_page.push(addNewObjInMP);
        return stateCopy


    } else if (action.type === UPDATE_MUSORA_TEXT) {

        let stateCopy = {...state};
        stateCopy.newPostTextMP = action.updateMP;
        stateCopy.car_modelMP = action.carModel;
        stateCopy.commentsMP = action.commentsMP;
        return stateCopy
    }

    return state
};

export const fileAddActionCreator = () => {
    return {type: MUSORA_PAGE_ADD}
};
export const updateMusoraTextActionCreator = (text, car,comments) => {
    debugger
    return {type: UPDATE_MUSORA_TEXT, updateMP: text, carModel: car, commentsMP: comments}
};



export default musoraPageReducer;

