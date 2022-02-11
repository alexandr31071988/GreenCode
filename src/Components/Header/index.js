import React from "react";
import MainLogo from '../../assets/img/MainLogo.svg'
import ProfileIcon from '../../assets/img/ProfileIcon.svg'
import NotifyIcon from '../../assets/img/NotifyIcon.svg'
import SearchIcon from '../../assets/img/SearchIcon.svg'
import BucketIcon from '../../assets/img/BucketIcon.svg'
import MenuIcon from '../../assets/img/MenuIcon.svg'
import './style.scss'

function Header() {
   return (
      <div className="header">
         <div className="logo">
            <img className="vector1Stroke" src={MainLogo}/>
         </div>

         <div className="nav-links">
            <img src={ProfileIcon}/>
            <img src={NotifyIcon}/>
            <img src={SearchIcon}/>
            <img className="bucket" src={BucketIcon}/>
            <img className="menu" src={MenuIcon}/>
         </div>
      </div>
   )
}


export default Header