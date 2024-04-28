import { Helmet } from "react-helmet";
import HeroBanner from "../HeroBanner/HeroBanner";
import CraftItemsSection from "../CraftItemsSection/CraftItemsSection";

const Home = () => {
    return (
        <div>

            <Helmet>

                <title>Craft Planet | Home Page</title>

            </Helmet>

            <HeroBanner></HeroBanner>

            <CraftItemsSection/>

        </div>
    );
};

export default Home;