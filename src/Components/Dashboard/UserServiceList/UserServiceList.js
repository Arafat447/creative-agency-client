import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { userContext } from '../../../App';
import DashboardMain from '../DashboardMain/DashboardMain';

const UserServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userInfo, setUserInfo] = useState([])
    const email = loggedInUser.email;
    useEffect(() => {
        fetch('https://agile-taiga-09020.herokuapp.com/showSpecifiedUserService?email=' + email)
            .then(res => res.json())
            .then(result => setUserInfo(result))
    }, [email])
    console.log(userInfo)
    return (
        <div>
            <DashboardMain info={'Service list'} >
                <div className="service-container">
                    <div className="row">

                        {
                            userInfo.length ?

                                userInfo.map(data => <div className="col-lg-6">
                                    <div className="card p-3 m-2" style={{ height: "250px", borderRadius: "17px" }}>
                                        <div className="card-body">
                                            <img src={`data:image/png;base64,${data.image.img}`} alt="" />
                                            <h4>{data.serviceName}</h4>
                                            <small>{data.description}</small></div>
                                    </div>
                                </div>


                                ) :
                                <p>Loading....</p>
                        }

                    </div>
                </div>
            </DashboardMain>
        </div>
    );
};

export default UserServiceList;