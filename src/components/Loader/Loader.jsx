import { HashLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-neutral-200 absolute z-50 top-0 bottom-0 left-0 right-0">
            <HashLoader size={60} color="#2C4E80" />
        </div>
    );
};

export default Loader;