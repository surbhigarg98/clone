import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useStateValue } from './StateProvider'

function Nav() {
    const [{user},dispatch] = useStateValue();
    const [show,handShow] = useState(false)

    useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){    //when pixels are greater than 100 make handshow true
            handShow(true)
        }else{
            handShow(false);
        }
    });
    return()=>{
        window.removeEventListener("scroll")
    }
    },[])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className="nav_logo"
            src="https://seeklogo.com/images/N/netflix-logo-0BC9BFB255-seeklogo.com.png"
            alt="netflix logo" />
        <div className="nav_avatar">
            <Avatar 
            src={user?.photoURL}
           />
            </div>
        </div>
    )
}

export default Nav
