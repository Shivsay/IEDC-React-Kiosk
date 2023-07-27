import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../IEDC_Logo.png';

function SideBar() {

        return (
            <div>
                <div className="sidebar">
            
                    <div className="sidebar-div">
                  
                        <Link to={'/home'}><img src={logo} className="logo"/></Link>
                        <hr className="line"></hr>

                        <Link to={'/home'} className="sidebar-a">HOME</Link>
                        <Link to={'/events'} className="sidebar-a">EVENTS</Link>
                        <Link to={'/about'} className="sidebar-a">ABOUT</Link>
                        <Link to={'/contact'} className="sidebar-a">CONTACT</Link>

                    </div>

                </div>

                    <Outlet />
            </div>
            );

}

export default SideBar;
