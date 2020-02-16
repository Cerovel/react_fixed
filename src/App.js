import React from 'react';
import './App.sass';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
    faArrowLeft, faArrowRight,
    faBaby, faCamera, faCheck, faCommentAlt,
    faEnvelope,
    faExclamation, faExclamationCircle, faHeart,
    faHome,
    faMapMarkerAlt, faMedal, faMoneyBill,
    faNewspaper, faRubleSign, faSleigh, faSlidersH,
    faUser, faVideo,
} from '@fortawesome/free-solid-svg-icons'

import {BrowserRouter, Route} from "react-router-dom";
import NewsPage from "./components/_NewsPage/NewsPage";
import Navbar from "./components/NavBar/Navbar";
import Musora from "./components/Musora/Musora";
import SalePage from "./components/SalePage/SalePage";
import Mymessage from "./components/Mymessage/Mymessage";
import Conversation from "./components/Сonversation/Conversation";
import MyPageAllCompAPI from "./components/MyPage/MyPage/MyPageAllCompAPI/MyPageAllCompAPI";
import MyPageAllCompContainer from "./components/MyPage/MyPage/MyPageAllCompContainer";


library.add(fab, faHome, faNewspaper, faEnvelope,
    faExclamation, faMapMarkerAlt, faUser, faSlidersH, faBaby, faMedal,
    faHeart, faCommentAlt, faExclamationCircle, faSleigh, faCamera, faVideo,
    faMoneyBill, faArrowLeft, faArrowRight, faRubleSign,faCheck);


let App = ( ) => {

    return (
        <BrowserRouter>
            <div className="navbar_position">
                <div className='item'>
                    < Navbar/>
                </div>
                {/*Компоненты главной страницы*/}
                <Route path='/mypage/:userId?' render={() => <MyPageAllCompContainer />}/>

                {/*Компоненты главной страницы*/}

                {/*компоненты новостей*/}
                <Route path='/news' render={() => <NewsPage/>}/>
                {/*компоненты новостей*/}

                {/*компоненты блока сообщений*/}
                <Route path='/message'
                       render={() => <Mymessage/>}/>
                {/*компоненты блока сообщений*/}

                {/*components block for gde stoyat*/}
                <Route path='/gdesuki' render={() => <Musora/>}/>


                {/*components block for gde stoyat*/}


                <Route path='/sale' render={() => <SalePage  />}/>


                <Route path='/settings' render={() => <Conversation  />}/>

            </div>

        </BrowserRouter>

    )
};

export default App;
















