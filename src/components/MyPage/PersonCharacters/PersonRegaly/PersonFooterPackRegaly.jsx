import React from 'react';
import PersonClass from './PersonFooterPackRegaly.module.sass'
import QualityFriends from "./1QualityFriends/QualityFriends";
import QuantityWarning from "./2QuantityWarning/QuantityWarning";
import UserLevel from "./3UserLevel/UserLevel";
import QualityPhoto from "./4QualityPhoto/QualityPhoto";
const PersonFooterPackRegaly = () => {
    return (
            <div className={PersonClass.footerPersonChar}>
                 <QualityFriends/>
                 <QuantityWarning/>
                 <UserLevel/>
                 <QualityPhoto/>
            </div>
    )
};

export default PersonFooterPackRegaly;