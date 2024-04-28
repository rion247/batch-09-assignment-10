import { useLoaderData } from "react-router-dom";
import TableListForMyArtAndCraft from './TableListForMyArtAndCraft';

const AllArtAndCraftItems = () => {

    const craftItems = useLoaderData();

    console.log(craftItems);

    return (

        <div className="mt-6 md:mt-10 lg:mt-16 xl:mt-20 max-w-80 md:max-w-xl lg:max-w-4xl xl:max-w-6xl mx-auto">

            <div className="table">

                <thead>

                    <tr>
                        <th>Craft Item Name</th>
                        <th>Price</th>
                        <th>Rating</th>                        
                        <th>Action</th>
                    </tr>

                </thead>

                {
                    craftItems.map(item => <TableListForMyArtAndCraft key={item._id} item={item}></TableListForMyArtAndCraft>)
                }

            </div>

        </div>

    );
};

export default AllArtAndCraftItems;