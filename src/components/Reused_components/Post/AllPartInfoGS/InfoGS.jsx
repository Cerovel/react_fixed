import React from 'react';
import Info from './InfoGS.module.sass' //основные стили
import Head_Description from "./1)InfoGS_Description/Head_Description";
import Info_user from "./2)InfoGS_User/Info_user";
import InfoGS_Picture from "./3)InfoGS_Picture/InfoGS_Picture";
import InfoGS_PictureDesc from "./4)InfoGS_PictureDesc/InfoGS_PictureDesc";
import InfoGS_Social from "./5)InfoGS_Social/InfoGS_Social";

const InfoGS = (props) => {
    return (
        <div>
            <main className={Info.info_gs}>
                <Head_Description head_title={props.head_title} />
                <Info_user user={props.user} time={props.time} ava={props.ava}/>
                <InfoGS_Picture picture={props.picture} />
                <InfoGS_PictureDesc desc={props.desc}  />
                <InfoGS_Social likes={props.likes} comments={props.comments} />
            </main>
        </div>

    )

};

export default InfoGS;