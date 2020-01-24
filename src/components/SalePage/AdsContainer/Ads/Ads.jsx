import React from "react";
import s from "./Ads.module.sass"
import AdsDesc from "./AdsDesc/AdsDesc";
import AdsName_Price from "./AdsName_Price/AdsName_Price";
import AdsSlider from "./AdsSlider/AdsSlider";
import AdsNumber from "./AdsNumber/AdsNumber";
import AdsMessage from "./AdsMessage/AdsMessage";

const Ads = (props) => {



    return (
        <div>
            <div className={s.ads_grid}>
                <div className={s.name}>
                    <AdsName_Price brand_name={props.brand_name} price={props.price}/>
                </div>
                <div className={s.slider}>
                    <AdsSlider photo={props.photo}/>
                    <div>sosi pisos i bud zdorov</div>
                </div>
                <div className={s.number}>
                    <AdsNumber phone_numb={props.phone_numb}/>

                </div>
                <div className={s.mess}>
                    <AdsMessage />

                </div>
                <div className={s.desc}>
                    <AdsDesc condition={props.condition} year={props.year} desc={props.desc} desc_header={props.desc_header}/>
                </div>

            </div>
        </div>
    )
};

export default Ads;