import React from "react";
import s from './FileAdd.module.sass'


const FileAdd = (props) => {

    let whereThey = React.createRef();
    let carModel = React.createRef();
    let commentsMusoraPage = React.createRef();

    let clickMusora = () => {
        props.FileAdd()
    };

    let PostChangeMP = () => {
        debugger
        let text = whereThey.current.value;
        let car = carModel.current.value;
        let comments = commentsMusoraPage.current.value
        props.UpdatePostMP(text, car, comments);
    };


    return (
        <div className={s.file_add__wrap}>
            <div className={s.file_add}>
                <div className={s.item_1}>
                    <strong>Где стоят</strong>
                    <input type="text" autoFocus='autoFocus' className={s.all_input}
                           placeholder='Примерное местоположение' ref={whereThey}
                           value={props.newPostTextMP} onChange={PostChangeMP}
                    />

                </div>
                <div className={s.item_2}>
                    <strong>машина</strong>
                    <input type="text" className={s.all_input} placeholder='Опишите машину'
                           value={props.car_modelMP} ref={carModel} onChange={PostChangeMP}/>
                </div>
                <div className={s.item_3}>
                    <strong>добавь фото</strong>
                    <input type="text" className={s.all_input} placeholder='пока url'/>
                </div>
                <div className={s.item_4}>
                    <strong>коментарии</strong>
                    <input type="text" className={s.all_input} placeholder='Например буген шакмак'
                           value={props.commentsMP} ref={commentsMusoraPage}
                    />
                </div>
                {/*Button*/}
                <div className={s.item_5}>
                    <button onClick={clickMusora} className={s.publick_where}>
                        Опубликовать
                    </button>
                </div>
                {/*Button*/}
            </div>
        </div>
    )
};

export default FileAdd