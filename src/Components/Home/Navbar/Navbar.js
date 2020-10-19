import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link,NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <img className="ml-5" src="https://i.postimg.cc/3rspnKGN/logo.png" alt="" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} activeClassName="nav-style" className="nav-link a mr-3" to='/home'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className="nav-link a mr-3" to='/home'>Our Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className="nav-link a mr-3" to='/home'>Our Team</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className="nav-link a mr-3" to='/home'>Contact us</NavLink>
                </li>
                <NavLink to="/login">
                    <button activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }} className="btn-brand">login</button>
                </NavLink>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;