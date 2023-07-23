import React from "react";
import logo from '../IEDC_Logo.png';

function SideBar() {
    return (
        <div class="sidebar">
            <img src={logo} class="logo"/>
            <hr class="line"></hr>
            <div class="sidebar-div">
                <a class="sidebar-a" href="#" onclick="showContent('home')">HOME</a>
                <a class="sidebar-a" href="#" onclick="showContent('events')">EVENTS</a>
                <a class="sidebar-a" href="#" onclick="showContent('about')">ABOUT</a>
                <a class="sidebar-a" href="#" onclick="showContent('contact')">CONTACT</a>
            </div>
        </div>
    );
}

export default SideBar;
