import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurBrand from '../OurBrands/OurBrand'
import OurService from '../OurServices/OurService'
import OurWork from '../OurWork/OurWork';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurBrand></OurBrand>
            <OurService></OurService>
            <OurWork></OurWork>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;