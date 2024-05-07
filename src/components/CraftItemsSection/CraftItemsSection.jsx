import { useEffect } from "react";
import { useState } from "react";
import SingleCraftItem from "./SingleCraftItem";

const CraftItemsSection = () => {

    const [craftItems, SetCraftItems] = useState([]);

    useEffect(() => {
        fetch('https://art-and-craft-store-server-side.vercel.app/crafts')
            .then(response => response.json())
            .then(json => SetCraftItems(json))
    }, [])

    return (
        <div className="max-w-[350px] p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl  mt-4 md:mt-6 lg:mt-8 xl:mt-32 font-poppins text-black mb-4 md:mb-8 lg:mb-10 xl:mb-12">

            <div className="space-y-2 text-center mb-10 md:mb-12 lg:mb-16 xl:mb-20">
                <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">Craft Items Section</h2>
                <p className="font-serif text-xs md:text-sm xl:text-base text-neutral-400 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto">Delight in the whimsy of hand-painted trinkets that add a touch of charm to your home decor. Whether you are searching for a meaningful gift or a special addition to your own collection, our Craft Item Section is sure to spark your imagination and ignite your love for all things handmade.</p>
            </div>

            <div className="grid grid-cols-1 gap-x-4 gap-y-6 xl:gap-y-8 lg:grid-cols-3">
                {
                    craftItems.slice(0,9).map(item => <SingleCraftItem key={item._id} item={item}></SingleCraftItem>)
                }
            </div>

        </div>
    );
};

export default CraftItemsSection;