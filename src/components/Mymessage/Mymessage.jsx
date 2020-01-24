import React from 'react';
import s from './Mymessage.module.sass'
import MyFriends from "./MyFriends/MyFriends";
 import MyDialogsPartnerContainer from "./MyDialogPartnersCont/MyDialogsPartnerContainer";
import AddMessageContainer from "./AddMessageContainer/AddMessageContainer";




const Mymessage = (props) => {

    return (
        <div className={s.message_grid}>
            <div className={s.dialog}>
               <MyDialogsPartnerContainer />
            </div>
            <div className={s.myfriends}>
                <MyFriends/>
            </div>
            <AddMessageContainer/>
        </div>
    )
};
export default Mymessage