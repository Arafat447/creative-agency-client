import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { userContext } from '../../../App';
import './Sidebar.css'


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [isUser, setIsUser] = useState(true)
    useEffect(() => {

        fetch('https://agile-taiga-09020.herokuapp.com/identifyAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(result => {
                if (result == 0) {
                    setIsUser(true)
                }
                else {
                    setIsUser(false)
                }
            })
    })

    return (
        <div className="sidebar-container">
            <div className="sidebar-logo">

                <Link to="/home">
                    <img src="https://i.postimg.cc/3rspnKGN/logo.png" alt="" />
                </Link>
            </div>
            <div className="p-3 w-75 ">
                {
                    isUser == true && <>
                        <NavLink to="/order"> Order</NavLink>
                        <NavLink to="/review"> Review</NavLink>
                        <NavLink to="/userServiceList"> Service List</NavLink>

                    </>
                }

                {
                    isUser == false && <>
                        <NavLink to="/addService"> Add Service</NavLink>
                        <NavLink to="/allUserServiceList"> Service list admin</NavLink>
                        <NavLink to="/makeAdmin"> Make Admin</NavLink>
                        <NavLink to="/order"> Order</NavLink>
                        <NavLink to="/review"> Review</NavLink>
                        <NavLink to="/userServiceList"> Service List</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Sidebar;