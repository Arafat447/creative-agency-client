import React, { useEffect, useState } from 'react';
import './Review.css'

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://agile-taiga-09020.herokuapp.com/getReviews')
            .then(res => res.json())
            .then(result => setReview(result))
    }, [])
    return (
        <section className="review my-5 py-3" >
        <div className="review-container container">
            <h2 className="text-center my-3 mb-5"> Clients <span >  Feedback</span></h2>
            <div className="row" >
                {
                    review.map(data => <div key={data.name} className="col-sm-12 col-md-6 col-lg-4 mt-5">
                        <div className="card card-service-custom   p-4" >
                            <div className="review-img d-flex " >
                                <img style={{ border: "1px solid white", borderRadius: "34px" }} src={data.photo} alt="review-img" />
                                <div className="mt-4 font-weight-bold" >
                                    <a href="/"> <h4>{data.company}</h4></a>
                                </div>
                            </div>
                            <div className="review-text">
                                <p className="text-center" >{data.description}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    </section>
    );
};

export default Review;