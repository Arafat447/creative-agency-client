import React from 'react';
import Slider from '../Slider/Slider';
import './OurWork.css'

const OurWork = () => {
    return (
        <div className="work-container  py-5 my-5">
            <h1 className="text-center text-light py-5 my-5" >Here are some of <span>our works</span></h1>
            <div className="work-wrapper ">
                <Slider></Slider>
            </div>
        </div>
    );
};

export default OurWork;