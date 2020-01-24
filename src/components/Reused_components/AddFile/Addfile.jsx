import React from 'react';
import s from './Addfile.module.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




const Addfile = (props) => {
    let textLink = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let ChangePost = () => {

        let text = textLink.current.value;
        props.UpdatePost(text)
    };


    return (
        <div className={s.shadow}>
            <div className={s.addfilegrid}>

                <div className={s.user_logo}>
                    <img className={s.user_logo} src="https://static-s.aa-cdn.net/img/ios/1099105909/dc1c3d2a016204900007acb9e5e3864e" alt=""/>
                </div>

                <div className={s.user_text}>
                    <textarea
                        onChange={ChangePost}
                        value={props.newPostText}
                        ref={textLink}
                        autoFocus='autoFocus' className={s.news_textarea}
                        placeholder={props.placeholder}
                    />
                </div>
            </div>

            <div className={s.add_file_footer}>
                <FontAwesomeIcon className={s.camera_icon} icon='camera'/>
                <FontAwesomeIcon className={s.camera_icon} icon='video'/>
                <div className={s.push_button}>
                    <button onClick={onAddPost}   className={s.button7}>Опубликовать нах</button>
                </div>
            </div>
        </div>
    )
};
export default Addfile;