import React from 'react';
import Carousel from "react-elastic-carousel";

const carouselInfo = [
    { img: "https://i.postimg.cc/k5T6zK27/carousel-1.png" },
    { img: "https://i.postimg.cc/qRghTqKy/carousel-2.png" },
    { img: "https://i.postimg.cc/yN13LvYf/carousel-3.png" },
    { img: "https://i.postimg.cc/x1ybGWYJ/carousel-4.png" },
    { img: "https://i.postimg.cc/Mp8QQWkJ/carousel-5.png" },
]
const Slider = () => {
    const breakPoints = [
        { width: 480, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 991, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2.5 },
    ]
    const imgStyles = {
        height: '334.7px',
        borderRadius: '10px',
        margin: '15px'
    }
    return (
        <div className="App">
            <Carousel enableAutoPlay autoPlaySpeed={1500} breakPoints={breakPoints}>
                {
                    carouselInfo.map(info => <div  >
                        <img style={imgStyles} src={info.img} alt="crsl-img" />
                    </div>)
                }

            </Carousel>
        </div >
    );
};

export default Slider;