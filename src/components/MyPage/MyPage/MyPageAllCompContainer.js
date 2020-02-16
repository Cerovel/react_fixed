import {connect} from "react-redux";
import MyPageAllCompAPI from "./MyPageAllCompAPI/MyPageAllCompAPI";
import {UserPageAC} from "../../../redux/myPageReducer";
import {withRouter} from "react-router-dom";


let mapStateToProps = (state) => {
    return {
        users_page: state.My_page.users_page
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        usersPage: (user) => {
            dispatch(UserPageAC(user))
        }
    }
};

let WithUrlDataContainerComponent =  withRouter(MyPageAllCompAPI);

const MyPageAllCompContainer = connect(mapStateToProps,mapDispatchToProps)(WithUrlDataContainerComponent);

export default MyPageAllCompContainer