
import { Link } from 'react-router-dom';

const SingleCraftItem = ({ item }) => {

    // console.log(item);

    const { itemName, itemImageURL, itemShortDescription, itemSubcategory, _id } = item;

    return (
        <div>

            <article className="flex flex-col w-full shadow-lg">

                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="...Loading" className="object-cover w-full h-52 bg-gray-500" src={itemImageURL} />
                </a>

                <div className="flex flex-col p-6">
                    
                    <a rel="noopener noreferrer" href="#" className="text-sm tracking-wider uppercase hover:underline text-orange-500 mb-2">{itemSubcategory}</a>
                    
                    <h3 className="flex-1 py-2 text-base xl:text-lg font-semibold leading-snug">{itemName.slice(0,24)}</h3>
                    
                    <div className="flex flex-wrap pt-3 space-x-2 text-xs text-gray-400">
                        <p>{itemShortDescription.slice(0,152)}</p>
                    </div>

                    <Link className='py-2 w-full bg-sky-900 hover:bg-sky-800 text-white text-center mt-8' to={`craftItem/${_id}`}>View Details</Link>

                </div>


            </article>

        </div>
    );
};

export default SingleCraftItem;