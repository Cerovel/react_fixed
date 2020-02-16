import MyPageAllCOmp from "./MyPageAllComp/MyPageAllCOmp";
import React from "react";

const MyPageAllCompMap = (props) => {
     let myPageAllComp = props.user.map(u=> {
        return <MyPageAllCOmp fullName={u.fullName} photos={u.photos}/>
    });

    return myPageAllComp
};

export default MyPageAllCompMap