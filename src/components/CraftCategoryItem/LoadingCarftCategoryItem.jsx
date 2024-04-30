import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleLoadingCraftCategoryItem from "./SingleLoadingCraftCategoryItem";

const LoadingCarftCategoryItem = () => {

    const [loadedData, SetLoadedData] = useState([]);

    const { itemCategory } = useParams();

    // console.log(itemCategory);

    useEffect(() => {

        fetch(`http://localhost:5000/categoryItems/${itemCategory}`)
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                SetLoadedData(json)
            })

    }, [itemCategory])

    // console.log(loadedData);

    return (


        <div className="grid grid-cols-1 gap-x-4 gap-y-6 xl:gap-y-8 lg:grid-cols-3 max-w-[350px] p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl  mt-4 md:mt-6 lg:mt-8 xl:mt-32 font-poppins text-black mb-4 md:mb-8 lg:mb-10 xl:mb-12">

            {
                loadedData.map(item => <SingleLoadingCraftCategoryItem key={item._id} item={item}></SingleLoadingCraftCategoryItem>)
            }


        </div>



    );
};

export default LoadingCarftCategoryItem;