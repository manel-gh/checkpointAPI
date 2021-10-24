import React from 'react'
import { Link } from 'react-router-dom';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav_logo'>
                <LocalBarIcon style={{fontSize:"250%", marginRight:"10px"}}/>
                <Link to="/" className="nav_title"> Cocktails</Link>
            </div>
            <div className='nav_links'>
                <ul>
                    <li><Link to="/Home" className="nav_link"> Home</Link></li>
                    <li><Link to="/Home/Drinks" className="nav_link"> Drinks</Link></li>
                    <li><Link to="/about" className="nav_link">About us</Link></li>
                </ul>
            </div>
            <div className="nav_links_m">
               <li><Link to="/about" className="nav_link">About us</Link></li>
            </div>
        </div>
    )
}

export default Navbar;