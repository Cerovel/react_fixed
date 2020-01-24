import React from "react";
import Post from "../../../Reused_components/Post/Post";



const MyPagePost = (props) => {

    let MyPagePost = props.page_post.map((k) => {
        return (
            <Post head={k.head} user={k.user} time={k.time} ava={k.ava} picture={k.picture} desc={k.desc} like={k.like}
                  comment={k.comment}/>
        )
    });

    return (
        <div>
            {MyPagePost}
        </div>
    )
};



export default MyPagePost