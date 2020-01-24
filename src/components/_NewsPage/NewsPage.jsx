import React from 'react';
import s from './NewsPage.module.css'
import UserSettings from "./UserSettings/UserSettings";
import NPAddfileContainer from "./NPAddFileContainer/NPAddfileContainer";
import NewsPagePostContainer from "./NewsPagePostContainer/NewsPagePostContainer";



const NewsPage = (props) => {



    return (
        <div className='wrapper'>
            <div className={s.newareagrid}>
                <div className={s.addfile}> <NPAddfileContainer store={props.store}/> </div>
                <div className={s.user_settings}><UserSettings/></div>
                <div className={s.news}><NewsPagePostContainer /></div>
            </div>
        </div>
    )
};

export default NewsPage;

