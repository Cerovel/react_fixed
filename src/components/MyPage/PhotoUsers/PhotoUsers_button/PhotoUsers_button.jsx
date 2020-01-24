import React from 'react';
import PhotoStyle from './PhotoUsers_button.module.sass'

const PhotoUsers_button = () => {
    return (
        <section className={PhotoStyle.PhotoProfile}>
            <button className={PhotoStyle.photo_Changes}>Редактировать</button>
        </section>
    )
};

export default PhotoUsers_button;