import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CraftCategorySection = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        // const { itemName, itemImageURL, itemSubcategory, itemProcessingTime, itemShortDescription, itemPrice, itemRating, itemCustomization, itemStock } = data;

        // console.log(data);

        fetch('http://localhost:5000/addCraftCategoryItem', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(json => {
                toast('Done!!!')
                console.log(json)
            })
    }

    return (
        <div className="w-full max-w-80 p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl md:p-12 rounded-md shadow sm:p-8 border border-neutral-300 text-black mt-4 md:mt-6 lg:mt-8 xl:mt-12 font-poppins mb-40">

            <Helmet>
                <title>Craft Planet | Add Craft Category Item Page</title>
            </Helmet>

            <h2 className="mb-12 text-base md:text-2xl xl:text-3xl font-bold text-center">Art & Craft Categories Section Items Entry Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-6 gap-6 mb-10">

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="itemName" className="block text-sm md:text-base xl:text-lg">Art or Craft Item Name</label>
                        <input type="text" name="itemName" id="itemName" placeholder="Enter Craft Item Name" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("itemName", { required: true })}
                        />
                        {errors.itemName && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="itemImageURL" className="block text-sm md:text-base xl:text-lg">Art or Craft Item Photo URL</label>
                        <input type="text" name="itemImageURL" id="itemImageURL" placeholder="Enter Craft Item Photo URL" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("itemImageURL", { required: true })}
                        />
                        {errors.itemImageURL && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="itemSubcategory" className="block text-sm md:text-base xl:text-lg">Art or Craft Item Sub Category</label>
                        <input type="text" name="itemSubcategory" id="itemSubcategory" placeholder="Enter Craft Item Sub Category" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("itemSubcategory", { required: true })}
                        />
                        {errors.itemSubcategory && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="itemProcessingTime" className="block text-sm md:text-base xl:text-lg">Item Processing Time</label>
                        <input type="text" name="itemProcessingTime" id="itemProcessingTime" placeholder="Enter Item Processing Time" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("itemProcessingTime", { required: true })}
                        />
                        {errors.itemProcessingTime && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-6 row-span-3">
                        <label htmlFor="itemShortDescription" className="block text-sm md:text-base xl:text-lg">Item Short Description</label>
                        <input type="text" name="itemShortDescription" id="itemShortDescription" placeholder="Enter Craft Item Short Description" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400"
                            {...register("itemShortDescription", { required: true })}
                        />
                        {errors.itemShortDescription && <span className="text-red-500">This field is required</span>}
                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="itemPrice" className="block text-sm md:text-base xl:text-lg">Price</label>
                        <input type="text" name="itemPrice" id="itemPrice" placeholder="Put Item Price" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("itemPrice", { required: true })} />

                        {errors.itemPrice && <span className="text-red-500">This field is required</span>}

                    </div>

                    <div className="space-y-2 col-span-3">
                        <label htmlFor="itemRating" className="block text-sm md:text-base xl:text-lg">Rating</label>
                        <input type="text" name="itemRating" id="itemRating" placeholder="Put Item Rating" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("itemRating", { required: true })} />

                        {errors.itemRating && <span className="text-red-500">This field is required</span>}

                    </div>

                </div>

                <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Add</button>

            </form >

        </div >
    );
};

export default CraftCategorySection;