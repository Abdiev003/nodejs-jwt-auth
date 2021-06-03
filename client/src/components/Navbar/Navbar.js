import React from 'react'
import { useSelector, connect } from "react-redux";
import { Link } from 'react-router-dom'
import './style.css'

import { logout } from "../../actions/logoutAction";

const Navbar = ({ logout }) => {

    const userActive = useSelector(state => state.userState)

    return (
        <section className="navbar">
            <nav>
                <h3><Link className="navbar__title" to="/">React Authendicated</Link></h3>
                <ul className="navbar__menu">
                    {userActive.authen && (<li className="menu__links"><Link onClick={logout} className="menu__link" to="/">Logout</Link></li>)}
                    {!userActive.authen && (<li className="menu__links"><Link className="menu__link" to="/login">Login</Link></li>)}
                    {!userActive.authen && (<li className="menu__links"><Link className="menu__link" to="/register">Register</Link></li>)}
                </ul>
            </nav>
        </section>
    )
}

export default connect(null, { logout })(Navbar);
