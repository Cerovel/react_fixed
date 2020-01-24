
import React from 'react';
import './AllPartInfoGS/InfoGS'
import PostStyle from './Post.module.sass'
import InfoGS from "./AllPartInfoGS/InfoGS";




const Post = (props) => {
    return(
        <div className={PostStyle.post_grid}>
            <div className={PostStyle.post}>
               <InfoGS
                   head_title={props.head}
                   user={props.user}
                   time={props.time}
                   ava={props.ava}
                   picture={props.picture}
                   desc={props.desc}
                   likes={props.like}
                   comments={props.comment}

               />
            </div>
        </div>
    )
};

export default Post;