import { Helmet } from "react-helmet";
import HeroBanner from "../HeroBanner/HeroBanner";

const Home = () => {
    return (
        <div>

            <Helmet>

                <title>Craft Planet | Home Page</title>

            </Helmet>

            <HeroBanner></HeroBanner>

        </div>
    );
};

export default Home;