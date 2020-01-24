import React from 'react';
import s from './SalePage.module.sass'
import ButtonAds from "./ButtonAds/ButtonAds";
 import AdsContainer from "./AdsContainer/AdsContainer";




const SalePage = ( ) => {

    return (
        <div className={s.salepage_grid}>
            <div className={s.button_add}>
                <ButtonAds/>
            </div>
            <div className={s.ads}>
               <AdsContainer/>
            </div>
        </div>
    )
};

export default SalePage;