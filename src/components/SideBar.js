import React from "react";
import logo from '../IEDC_Logo.png';

const SideBar = ({handleBarMainChange}) => {

    return (
        <div className="sidebar">
    
            <div className="sidebar-div">
          
                <a href="#" onClick= {() => handleBarMainChange('home')}> <img src={logo} className="logo"/> </a>
                <hr className="line"></hr>

                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('home')}>HOME</a>
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('events')}>EVENTS</a>
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('about')}>ABOUT</a>
                <a className="sidebar-a" href="#" onClick= {() => handleBarMainChange('contact')}>CONTACT</a>
            </div>
        </div>
    );
}

export default SideBar;
