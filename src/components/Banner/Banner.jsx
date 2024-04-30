import Lottie from "lottie-react";
import mobileAnimation from "../../../public/mobile.json"



const Banner = () => {

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: mobileAnimation,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };

    return (
        <div className="p-6 py-12 text-black">
            <div className="mx-auto max-w-7xl flex justify-center gap-6 md:gap-12 lg:gap-20 items-center flex-col-reverse lg:flex-row-reverse">
                <div className="flex flex-col items-start justify-start gap-6">
                    <h2 className="text-center text-xl md:text-2xl lg:text-3xl tracking-tighter font-bold">
                        JOIN OUR MOBILE APP FOR FREE
                    </h2>
                    <a href="#" rel="noreferrer noopener" className="px-5 lg:mt-2 py-3 rounded-md border bg-gray-50 text-gray-900 border-gray-400 inline-block mx-auto lg:mx-px">Download Now</a>
                </div>

                <div className="w-1/4">
                    <Lottie
                        animationData={mobileAnimation}
                        height={10}
                        width={20}
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
