import React from 'react';
import PhotoUsers from "./PhotoUsers/PhotoUsers";
import PersonCharacters from "./PersonCharacters/PersonCharacters";
import Friends from "./Friends_DIR/Friends";
import s from './MyPageAllCOmp.module.sass'
import FriendsOnline from "./FriendsOnline_DIR/FriendsOnline";
import MyPageAddFileContainer from "./MyPageAddFileContainer/MyPageAddFileContainer";
import MyPagePost from "./MyPagePostContainer/MyPagePost/MyPagePost";
import MyPagePostContainer from "./MyPagePostContainer/MyPagePostContainer";


const MyPageAllCOmp = (props) => {


    return (
        <div className='NOT_CHANGE'>
            <div className={s.wrapper}>
                <div className={s.gridmypage}>
                    <div className={s.photo}>
                        <PhotoUsers/>
                    </div>
                    <div className={s.person}>
                        <PersonCharacters/>
                    </div>
                    <div className={s.frind}>
                        <Friends/>
                    </div>
                    <div className={s.frindon}>
                        <FriendsOnline/>
                    </div>

                    {/*добавил после окончания вертски*/}
                    <div className={s.fileadd_mypage}>

                       <MyPageAddFileContainer   />

                    </div>
                    {/*добавил после окончания вертски*/}

                </div>
            </div>

            <div className={s.post_wrapper}>
                <div>
                    {/*dont delete*/}
                </div>
                <div className={s.post_grid}>
                   <MyPagePostContainer  />
                </div>
            </div>
        </div>
    )
};


export default MyPageAllCOmp;