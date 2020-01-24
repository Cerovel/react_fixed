import React from 'react';
import s from './AddMessage.module.sass'



const AddMessage = (props) => {

    let messageLink = React.createRef();

    let addMessage = () => {
        props.addMesageInaction()
    };

    let updateAddMessage = () => {
        let text = messageLink.current.value;
        props.changeMessage(text)
    };

    return (
            <div className={s.absolute_button}>
                <input onChange={updateAddMessage} value={props.newMessage} ref={messageLink} className={s.add_message} type="text"/>
                <button onClick={addMessage} className={s.buttonscj}>go</button>

            </div>
            
    )
};
export default AddMessage
