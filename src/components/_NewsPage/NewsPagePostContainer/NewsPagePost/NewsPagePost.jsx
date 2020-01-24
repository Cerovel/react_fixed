import React from "react";
import Post from "../../../Reused_components/Post/Post";



const NewsPagePost = (props) => {



    let NewsPost = props.news_page.map((n) => {
        return (
            < Post head={n.head_name}
                   user={n.user_name}
                   time={n.user_time}
                   ava={n.user_ava}
                   picture={n.picture_main}
                   desc={n.picture_desc}
                   likes={n.like}
                   comments={n.comment}
                   key={n.id}
            />
        )
    });

    return (
        <div>
            {NewsPost}
        </div>
    )
};

export default NewsPagePost