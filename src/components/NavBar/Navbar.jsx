import React from 'react';
import NavClass from './Navbar.module.sass'
import Mypage from "./ModuleInNavbar/Mypage/Mypage";
import Logo from "./ModuleInNavbar/Logo/Logo";
import News from "./ModuleInNavbar/News/News";
import Message from "./ModuleInNavbar/MyMessage/Message";
import Exclamation from "./ModuleInNavbar/Exclamation/Exclamation";
import Maps from "./ModuleInNavbar/Maps/Maps";
import User from "./ModuleInNavbar/User/User";
import Mysettings from "./ModuleInNavbar/Mysettings/Mysettings";
import Admin from "./ModuleInNavbar/Moderator/Admin";


const Navbar = () => {
    return (

        <aside className={NavClass.sidebar}>
            <div className={NavClass.side_grid}>
                <Logo/>
                <Mypage/>
                <News/>
                <Message/>
                <Exclamation/>
                {/*<Maps/>*/}
                <User/>
                <Mysettings/>
                <Admin/>



            </div>


        </aside>

    )

};

export default Navbar;