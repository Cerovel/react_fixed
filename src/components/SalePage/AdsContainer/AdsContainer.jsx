import React from 'react';
import {connect} from "react-redux";
 import AdsMap from "./AdsMap";


let mapStateToProps = (state) => {
    return {
        sale_page: state.Sale_page.sale_page
    }
};
const AdsContainer = connect(mapStateToProps)(AdsMap)


export default AdsContainer;