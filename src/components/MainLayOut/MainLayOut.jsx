import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const MainLayOut = () => {
    return (
        <div>

            <div className="max-w-80 mt-2 md:mt-4 md:max-w-xl lg:mt-6 lg:max-w-4xl xl:mt-8 xl:max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>


            <Outlet></Outlet>

        </div>
    );
};

export default MainLayOut;