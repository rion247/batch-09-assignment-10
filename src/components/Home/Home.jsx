import { Helmet } from "react-helmet";
import HeroBanner from "../HeroBanner/HeroBanner";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>

            <Helmet>

                <title>Craft Planet | Home Page</title>

            </Helmet>

            <HeroBanner></HeroBanner>

            <CraftItemsSection/>

            <Footer></Footer>

        </div>
    );
};

export default Home;