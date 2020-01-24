import React from 'react';
import s from './UserAnswer.module.sass'


const UserAnswer = (props) => {

     return (
        <div className={s.user_wrap}>
            <div className={s.danger}>
                <div>Время регистрации <span>{props.time_warning}</span></div>
                <button className={s.red}>До сих пор там</button>
                <button className={s.green}>Все чисто</button>
            </div>
            <div className={s.user_answer}>
                <div className={s.musor_image} >
                    <img src={props.photo_musor_page} alt=""/>
                </div>
                <div className={s.characters_wrap}>
                    <div className={s.characters}>
                        <div className={s.user}>
                             <div className={s.user_image}><img src={props.user_image} alt=""/></div>
                             <div className={s.user_name}>{props.user_name}</div>
                             <div className={s.user_time}>{props.time_warning}</div>
                        </div>
                        <div className={s.user_otvet}>
                         <div>Местонахождение</div>
                         <div><span>{props.where_they}</span> </div>
                         <div>Марка машины</div>
                         <div><span>{props.car_model}</span> </div>
                         <div>Комментарии</div>
                         <div className={s.comment}><span>{props.comment_musor} </span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UserAnswer;