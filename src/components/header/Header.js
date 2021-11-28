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
                {loginBool.isAuth ?
                    <Link to="/post-blog">POST</Link> :
                <div>
                    <Link to="/sign-up">SIGNUP</Link>
           
                </div>}
        </div>
    )
}
export default Header;