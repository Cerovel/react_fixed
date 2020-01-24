import React from "react";
 import {connect} from "react-redux";
import NewsPagePost from "./NewsPagePost/NewsPagePost";


let mapStateToProps = (state) => {
    return {
        news_page: state.News_page.news_page
    }
};

 const NewsPagePostContainer = connect(mapStateToProps)(NewsPagePost);

export default NewsPagePostContainer