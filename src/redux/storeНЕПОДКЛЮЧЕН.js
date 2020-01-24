
import musoraPageReducer from "./MusoraPageReducer";
import myMessagePageReducer from "./myMessagePageReducer";
import myPageReducer from "./myPageReducer";


let store = {

    _state: {

        My_page: {
            page_post: [
                {
                    head: 'more more', user: 'dima', time: '14:12',
                    ava: 'https://web-mastery.info/up/design/img/smiles/big-smile/smile-6.png',
                    picture: 'https://cosmos-images2.imgix.net/file/spina/photo/18032/190218-mount-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
                    desc: 'some word',
                    like: '1',
                    comment: '2'
                },

                {
                    head: 'more2 more2', user: 'dima2', time: '14:122',
                    ava: 'https://web-mastery.info/up/design/img/smiles/big-smile/smile-6.png',
                    picture: 'https://cosmos-images2.imgix.net/file/spina/photo/18032/190218-mount-full.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
                    desc: 'some word',
                    like: '1',
                    comment: '2'
                },
            ],
            newPostText: '1'

        },
        News_page: {
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
                {
                    head_name: 'Приветики',
                    user_name: 'Ivan',
                    user_time: '14:33',
                    user_ava: 'https://docusaurus.io/img/users/accord-project.png',
                    picture_main: 'http://news.bbcimg.co.uk/news/special/2015/newsspec_10077/content/english/img/1024/future_of_news.jpg',
                    picture_desc: 'run forest run',
                    like: 1,
                    comment: 3
                },
            ],
        },
        Sale_page: {
            sale_page: [
                {
                    brand_name: 'Pagany_zonda',
                    price: '4 000 000',
                    phone_numb: '7-927-32-43',
                    condition: 'new',
                    year: 2019,
                    desc: 'Продаю машину так как во время езды цепляет асфальт. Только для города',
                    desc_header: 'Описание',
                    photo: 'https://image.businessinsider.com/5d0bd4b7e3ecba5d97628a02?width=1100&format=jpeg&auto=webp',
                },
                {
                    brand_name: 'Pagany_zonda',
                    price: '4 000 000',
                    phone_numb: '7-927-32-43',
                    condition: 'new',
                    year: 2019,
                    desc: 'Продаю машину так как во время езды цепляет асфальт. Только для города',
                    desc_header: 'Описание',
                    photo: 'https://image.businessinsider.com/5d0bd4b7e3ecba5d97628a02?width=1100&format=jpeg&auto=webp',
                },
                {
                    brand_name: 'Pagany_zonda',
                    price: '4 000 000',
                    phone_numb: '7-927-32-43',
                    condition: 'new',
                    year: 2019,
                    desc: 'Продаю машину так как во время езды цепляет асфальт. Только для города',
                    desc_header: 'Описание',
                    photo: 'https://image.businessinsider.com/5d0bd4b7e3ecba5d97628a02?width=1100&format=jpeg&auto=webp',
                },
                {
                    brand_name: 'Pagany_zonda',
                    price: '4 000 000',
                    phone_numb: '7-927-32-43',
                    condition: 'new',
                    year: 2019,
                    desc: 'Продаю машину так как во время езды цепляет асфальт. Только для города',
                    desc_header: 'Описание',
                    photo: 'https://image.businessinsider.com/5d0bd4b7e3ecba5d97628a02?width=1100&format=jpeg&auto=webp',
                },
                {
                    brand_name: 'Pagany_zonda',
                    price: '4 000 000',
                    phone_numb: '7-927-32-43',
                    condition: 'new',
                    year: 2019,
                    desc: 'Продаю машину так как во время езды цепляет асфальт. Только для города',
                    desc_header: 'Описание',
                    photo: 'https://image.businessinsider.com/5d0bd4b7e3ecba5d97628a02?width=1100&format=jpeg&auto=webp',
                },

            ]
        },
        MyMessagePage: {
            my_message: [
                {user_name: 'dima', time_add: '19:23'},
                {user_name: 'petr', time_add: '15:23'},
            ],
            newMessage: 'new_message'
        },
        Musora_page: {
            musora_page: [
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
            newPostTextMP: 'ff'

        }
    },
    getState() {
        return this._state
    },
    callSubscriber() {

    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
    dispatch(action) {

        this._state.My_page = myPageReducer(this._state.My_page, action);
        this._state.Musora_page = musoraPageReducer(this._state.Musora_page, action);
        this._state.MyMessagePage =  myMessagePageReducer(this._state.MyMessagePage, action);
        this.callSubscriber(this._state)

    },


};





export default store
