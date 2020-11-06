import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './Nav.css'


function Nav() {
    
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
        <div>
            <img  className="nav_avatar" 
           src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
           />
            </div>
        </div>
    )
}

export default Nav
