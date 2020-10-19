import React from 'react';
const brandImg = [
    { img: "https://i.postimg.cc/pXKjSgQZ/slack.png" },
    { img: "https://i.postimg.cc/GpgTYrrc/google.png" },
    { img: "https://i.postimg.cc/K8NMGBH3/uber.png" },
    { img: "https://i.postimg.cc/W41JhzBW/netflix.png" },
    { img: "https://i.postimg.cc/MpxBJdd8/airbnb.png" },

]
const OurBrand = () => {
    return (
        <div className="brand-logo my-5 py-5  mx-auto container"  >
            <div className="row  mx-auto  text-center ">
                {brandImg.map(brand => <div className="col-lg-2 mx-auto"><img style={{height: " 44px"}} className="img-fluid" src={brand.img} alt="img" /></div>
                )}
            </div>
        </div>
    );
};

export default OurBrand;