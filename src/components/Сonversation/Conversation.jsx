import React from "react";
import s from "./Conversation.module.sass"
import SearchComp from "./SearchComp/SearchComp";
import Location from "./Location/Location";
import ShowMore from "./ShowMore/ShowMore";
import ParticipantContainer from "./ParticipantContainer/ParticipantContainer";


const Conversation = () => {
    return (
        <div className={s.grid_container}>
            <div className={s.navbar_conversation}>
                {/*for navbar*/}
            </div>
            <div className={s.search_friend}>
                <SearchComp />
            </div>
            <div className={s.add_location}>
                <Location/>
            </div>
            <div className={s.friend_box}>
                <ParticipantContainer/>
             </div>
            <div className={s.show_More}>
                <ShowMore/>
            </div>
        </div>
    )
};

export default Conversation