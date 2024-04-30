import { Helmet } from "react-helmet";
import HeroBanner from "../HeroBanner/HeroBanner";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import Footer from "../Footer/Footer";
import CraftCategoryItem from "../CraftCategoryItem/CraftCategoryItem";
import Banner from "../Banner/Banner";
import LatestBlog from "../LatestBlog/LatestBlog";

const Home = () => {
    return (
        <div>

            <Helmet>

                <title>Craft Planet | Home Page</title>

            </Helmet>

            <HeroBanner></HeroBanner>

            <CraftItemsSection/>

            <CraftCategoryItem></CraftCategoryItem>

            <LatestBlog></LatestBlog>

            <Banner></Banner>

            <Footer></Footer>

        </div>
    );
};

export default Home;