import React from 'react';
import PersonClass from './PersonCharacters.module.sass'
import HeaderPerson from "./1)HeaderPerson/HeaderPerson";
import MainPerson from "./2)MainPerson/MainPerson";
import PersonFooterPackRegaly from "./PersonRegaly/PersonFooterPackRegaly";


const PersonCharacters = (props) => {
    return (
        <div className={PersonClass.person_Char}>

            <HeaderPerson fullName={props.fullName} />
            <MainPerson/>
             <PersonFooterPackRegaly />

        </div>
    )
};

export default PersonCharacters;