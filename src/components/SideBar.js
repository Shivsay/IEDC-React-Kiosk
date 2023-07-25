import React from "react";
import logo from '../IEDC_Logo.png';

const SideBar = ({handleBarMainChange}) => {

    return (
        <div className="sidebar">
            <img src={logo} className="logo"/>
            <hr className="line"></hr>
            <div className="sidebar-div">
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('home')}>HOME</a>
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('events')}>EVENTS</a>
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('about')}>ABOUT</a>
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('contact')}>CONTACT</a>
            </div>
        </div>
    );
}

export default SideBar;
