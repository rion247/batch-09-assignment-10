import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-neutral-300">
            <HashLoader size={100} color="#36d7b7" />
        </div>
    );
};

export default Loader;