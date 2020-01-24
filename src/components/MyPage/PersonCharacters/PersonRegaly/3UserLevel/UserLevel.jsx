import React from 'react';
import PersonClass from './UserLevel.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const UserLevel = () => {
    return (
        <div className={`${PersonClass.self_center} ${PersonClass.medal_color}`}>
            <div>
                <strong>
                    <FontAwesomeIcon icon='medal'/>
                </strong>
                <br/>
                <span>Уровень:GOD</span>
            </div>
        </div>

    )
};

export default UserLevel;