import { useLoaderData } from "react-router-dom";

const CraftViewDetailsPage = () => {

    const craftItems = useLoaderData();

    const { _id, itemName, itemImageURL, itemSubcategory, itemProcessingTime, itemShortDescription, itemPrice, itemRating, itemCustomization, itemStock, email, name } = craftItems;

    return (
        <div className="max-w-[350px] p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl  mt-4 md:mt-6 lg:mt-8 xl:mt-32 font-poppins text-black mb-16 md:mb-20 lg:mb-32 xl:mb-40">

            <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                <img src={itemImageURL} alt="...Loading" className="object-cover w-full h-48 md:h-60 lg:h-full rounded lg:col-span-7 dark:bg-gray-500" />
                <div className="p-6 space-y-4 lg:col-span-5">

                    <span className="text-sm text-neutral-600 italic">Product ID: {_id}</span>

                    <h3 className="text-lg md:text-xl lg::text-2xl font-semibold sm:text-4xl mt-6 md:mt-12 py-4 border-dashed border-y border-neutral-300 mb-4 md:mb-10">{itemName}</h3>

                    <h6 className="text-sm text-orange-600 uppercase">{itemSubcategory}</h6>

                    <p className="text-xs md:text-sm lg:text-base text-neutral-500 text-justify">{itemShortDescription}</p>

                    <div className="grid grid-cols-1 gap-4">

                        <div className="flex items-center justify-start gap-2">

                            <h6 className=" text-sm md:text-base lg:text-lg font-medium">Price:</h6>
                            <h6 className="text-lg md:text-xl lg:text-2xl text-red-500 font-medium ">${itemPrice}</h6>

                        </div>

                        <div className="flex items-center justify-start gap-2">

                            <h6 className="text-sm md:text-base lg:text-lg font-medium">Processing Time:</h6>
                            <h6 className="text-sm md:text-base lg:text-lg font-medium">{itemProcessingTime} days</h6>

                        </div>

                        <div className="flex items-center justify-start gap-2">

                            <h6 className="text-sm md:text-base lg:text-lg font-medium">Item Rating:</h6>
                            <h6 className="text-sm md:text-base lg:text-lg font-medium text-orange-600">{itemRating}</h6>

                        </div>

                        <div className="flex items-center justify-start gap-2">

                            <h6 className="text-sm md:text-base lg:text-lgfont-medium">Item Available:</h6>
                            <h6 className="text-sm md:text-base lg:text-lgfont-medium text-green-500">{itemStock}</h6>

                        </div>

                        <div className="flex items-center justify-start gap-2">

                            <h6 className="text-sm md:text-base lg:text-lg font-medium">Customization:</h6>
                            <h6 className="text-sm md:text-base lg:text-lg font-medium text-red-500">{itemCustomization}</h6>

                        </div>                        

                        <h3 className="text-base md:text-xl lg:text-2xl  font-semibold mt-8 mb-6 py-4 border-dashed border-y border-neutral-300">Post Created By:</h3>

                        <h6 className="text-sm md:text-base lg:text-lg font-medium">Owner Name: {name}</h6>
                        <h6 className="text-sm md:text-base lg:text-lgfont-medium">Email: {email}</h6>


                    </div>

                </div>
            </a>

        </div>
    );
};

export default CraftViewDetailsPage;

