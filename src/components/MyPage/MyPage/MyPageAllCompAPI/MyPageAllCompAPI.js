import React from "react";
 import * as axios from "axios";
import MyPageAllCompMap from "./MyPageAllCompMap/MyPageAllCompMap";


class MyPageAllCompAPI extends React.Component{

    componentDidMount() {

        let userIdent = this.props.match.params.userId;
        if (!userIdent) {
            userIdent = 5753;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userIdent)
            .then(response => {
                this.props.usersPage(response.data)
            });
    }

    render() {

        return <MyPageAllCompMap  {...this.props} user={this.props.users_page} />
    }
}

export default MyPageAllCompAPI