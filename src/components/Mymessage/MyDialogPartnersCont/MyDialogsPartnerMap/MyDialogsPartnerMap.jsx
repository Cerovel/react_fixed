import React from 'react';
import MyDialogsPartner from "./MyDialogsParterns/MyDialogsPartner";

const MyDialogsPartnerMap = (props) => {

    let myDialogs = props.my_message.map((l)=> {
        return (
            <MyDialogsPartner key={l.id} user_name={l.user_name} time_add={l.time_add}/>
        )
    });

    return (
        <div>
            {myDialogs}
        </div>
    )
};
export default MyDialogsPartnerMap
