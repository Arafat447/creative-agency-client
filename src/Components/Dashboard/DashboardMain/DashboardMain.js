import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const DashboardMain = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <div>
            <div className="row container-fluid" >
                <div className="col-lg-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between p-4">
                        <h1>{props.info}</h1>
                        <h1>{loggedInUser.name} </h1>
                    </div>
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;