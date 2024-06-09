import { useContext } from "react";
import Category from "../../component/category/Category";
import HeroSection from "../../component/heroSection/HeroSection";
import HomePageProductCard from "../../component/homePageProductCard/HomePageProductCard";
import Layout from "../../component/layout/Layout";
import Testimonial from "../../component/testimonial/Testimonial";
import Track from "../../component/track/Track";
import myContext from "../../component/context/myContext";
import Loader from "../../component/loader/Loader";






const HomePage=()=>{
    return(
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
            <Loader/>
        </Layout>
    );
}

export default HomePage; 