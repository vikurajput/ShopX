import { useContext } from "react";
import Category from "../../component/category/Category";
import HeroSection from "../../component/heroSection/HeroSection";
import HomePageProductCard from "../../component/homePageProductCard/HomePageProductCard";
import Layout from "../../component/layout/Layout";
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

        </Layout>
    );
}

export default HomePage; 