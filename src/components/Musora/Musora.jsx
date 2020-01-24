import React from 'react';
import s from './Musora.module.sass'
import FileAddContainer from "./FileAddContainer/FileAddContainer";
import UserAnswerContainer from "./UserAnswerContainer/UserAnswerContainer";


const Musora = (props) => {


    return (
        <div className={s.musora}>

            <div className={s.fileadd}>
                <FileAddContainer  />
            </div>
            <div className={s.user_answer}>
                <UserAnswerContainer />
            </div>
        </div>
    )
};
export default Musora;