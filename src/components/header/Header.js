import "./header.css"
import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoginBool } from '../../features/login/loginSlice';
 function Header() {
    const loginBool = useSelector(getLoginBool);
    return (
        <div className="main-div">
            <Link to="/">HOME</Link>
        </div>
    )
}
export default Header;