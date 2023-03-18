import './navbar.css'
import {IoNotificationsOutline} from 'react-icons/io5'
import {AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="navbar-container">
            <div className='navbar-user-icon'><img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80' alt="profileImage"/></div>
            <div className='navbar-fun-components'>
                <div className='navbar-notification nfc'><IoNotificationsOutline className='icon'/></div>
                <Link to="/addtask"><div className='navbar-add-work nfc'><AiOutlinePlus className='icon'/></div></Link>
            </div>
        </div>
     );
}
 
export default Navbar;