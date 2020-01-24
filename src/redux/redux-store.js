import {combineReducers, createStore} from "redux";
import myPageReducer from "./myPageReducer";
import newsPageReducer from "./newsPageReducer";
import salePageReducer from "./salePageReducer";
import myMessagePageReducer from "./myMessagePageReducer";
import musoraPageReducer from "./MusoraPageReducer";
import ConversationReducer from "./ConversationReducer";


let reducers = combineReducers({
    My_page         :     myPageReducer,
    News_page       :     newsPageReducer,
    Sale_page       :     salePageReducer,
    MyMessagePage   :     myMessagePageReducer,
    Musora_page     :     musoraPageReducer,
    UsersPage       :     ConversationReducer,
});



let store = createStore(reducers);

window.store = store;

export default store