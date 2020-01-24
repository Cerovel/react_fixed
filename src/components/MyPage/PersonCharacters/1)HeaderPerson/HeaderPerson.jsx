import React from 'react';
import PersonClass from './HeaderPerson.module.sass'



const HeaderPerson = () => {
    return (
            <div className={PersonClass.head_person_char}>
                <div>
                    <span>Рустам Кабиров </span> <br/>
                    <a href="#">webskydev.ru</a>
                </div>
                <div>online</div>
            </div>

    )
};

export default HeaderPerson;