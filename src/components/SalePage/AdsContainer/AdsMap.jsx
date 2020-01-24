import React from 'react';
import Ads from "./Ads/Ads";



const AdsMap =  (props) => {

    let newArray = props.sale_page.map((k) => {
        return <Ads brand_name={k.brand_name} price={k.price} phone_numb={k.phone_numb} condition={k.condition}
                 year={k.year} desc={k.desc} photo={k.photo} desc_header={k.desc_header}/>
    });

    return newArray

};

export default AdsMap;