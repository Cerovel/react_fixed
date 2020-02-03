import React from 'react';
import UserAnswer from "./UserAnswer/UserAnswer";



const UserAnswerMap = (props) => {



    let userAnswerMap = props.musora_page.map((l)=> {
         return (
             <UserAnswer    user_image={l.user_image}
                            user_name={l.user_name}
                            time_warning={l.time_warning}
                            where_they={l.where_they}
                            car_model={l.car_model}
                            comment_musor={l.comment_musor}
                            photo_musor_page={l.photo_musor_page}
                            key={l.id}

             />
         )
    });

     return (
       <div>
          {userAnswerMap}
       </div>
    )
};
export default UserAnswerMap;