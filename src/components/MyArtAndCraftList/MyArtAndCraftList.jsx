import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";
import SingleMyArtAndCraftList from "./SingleMyArtAndCraftList";


const MyArtAndCraftList = () => {

    const { user } = useContext(AuthContext);

    const [items, SetItems] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/craft/${user.email}`)
            .then(response => response.json())
            .then(json => {
                SetItems(json);
            })

    }, [user]);


    return (
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 xl:gap-y-8 lg:grid-cols-2 max-w-[350px] p-4 mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-7xl  mt-4 md:mt-6 lg:mt-8 xl:mt-32 font-poppins text-black mb-40">


            {
                items.map(item => <SingleMyArtAndCraftList key={item._id} item={item} items={items} SetItems={SetItems}></SingleMyArtAndCraftList>)
            }

        </div>
    );
};

export default MyArtAndCraftList;