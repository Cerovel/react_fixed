import React from 'react';
import PhotoStyle from './PhotoUsers_photo.module.sass'

const PhotoUsers_photo = (props) => {
console.log(props.photos)
    return (
        <section className={PhotoStyle.PhotoProfile}>
            <img src={props.photos.large ? props.photos.large : 'https://clck.ru/MDjRc'} width='261'
                 height='255' alt=""/>
        </section>
    )
};

export default PhotoUsers_photo;