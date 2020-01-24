import React from 'react';
import PersonClass from './MainPerson.module.sass'


const MainPerson = () => {
    return (


            <div className={PersonClass.main_person_char}>
                <div >День рождения:</div>
                <div>9 августа 1996г</div>
                <div >Город:</div>
                <div>Шулганово</div>
                <div >Машина:</div>
                <div>Ваз 2107</div>
                <div >Уровень топлива:</div>
                <div>Езжу на парах</div>
            </div>

    )
};

export default MainPerson;