import React from 'react';
import './PhotoUsers.module.sass'
import PhotoStyle from './PhotoUsers.module.sass'
import PhotoUsers_button from "./PhotoUsers_button/PhotoUsers_button";
import PhotoUsers_photo from "./PhotoUsers_photo/PhotoUsers_photo";

const PhotoUsers = (props) => {
    return (
        <section className={PhotoStyle.PhotoProfile}>
            <PhotoUsers_photo photos={props.photos}/>
            <PhotoUsers_button/>
        </section>
    )
};

export default PhotoUsers;