import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
import './OurService.css'

const OurService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://agile-taiga-09020.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

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
        <section className="service-container py-5" >
            <div className="container text-center" >
                <h2 className=" py-5  my-5" >Provide awesome <span>services</span></h2>
                <div className="row " >
                    {
                        service.map(info =>
                            <div className="col-sm-12 col-md-6 col-lg-4 mt-4">

                                {
                                    isUser == true && <Link to={`/order/${info._id}`} >
                                        <div className="card card-container" >
                                            <div className="card-body ">
                                                <img src={`data:image/png;base64,${info.image.img}`} alt="card-img" />
                                                <h4>{info.service}</h4>
                                                <p>{info.description}</p>

                                            </div>
                                        </div>
                                    </Link>

                                }
                                {
                                    isUser == false &&
                                    <div className="card card-container" >
                                        <div className="card-body ">
                                            <img src={`data:image/png;base64,${info.image.img}`} alt="card-img" />
                                            <h4>{info.service}</h4>
                                            <p>{info.description}</p>

                                        </div>
                                    </div>

                                }

                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default OurService;