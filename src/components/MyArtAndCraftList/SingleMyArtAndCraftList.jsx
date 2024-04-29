import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleMyArtAndCraftList = ({ item, items, SetItems }) => {

    const { itemName, itemImageURL, itemShortDescription, itemSubcategory, _id, itemPrice, itemRating, itemCustomization, itemStock } = item;

    console.log(items);


    const handleDeleteButton = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: 'DELETE',
                }
                )
                    .then(response => response.json())
                    .then(json => {
                        console.log(json);


                        if (json.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft Item has been deleted.",
                                icon: "success"
                            });

                        }

                        const remaining = items.filter(element => element._id !== _id);
                        SetItems(remaining);


                    })

            }
        });

    }



    return (
        <div>

            <article className="flex flex-col w-full shadow-lg">

                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="...Loading" className="object-cover w-full h-52 bg-gray-500" src={itemImageURL} />
                </a>

                <div className="flex flex-col p-6">

                    <a rel="noopener noreferrer" href="#" className="text-sm tracking-wider uppercase hover:underline text-orange-500 mb-2">{itemSubcategory}</a>

                    <h3 className="flex-1 py-2 text-base xl:text-lg font-semibold leading-snug">{itemName.slice(0, 24)}</h3>

                    <div className="flex flex-wrap pt-3 space-x-2 text-xs text-gray-400">
                        <p>{itemShortDescription.slice(0, 152)}</p>
                    </div>

                    <div className="flex items-center justify-start gap-2">

                        <h6 className=" text-sm md:text-base lg:text-lg font-medium">Price:</h6>
                        <h6 className="text-lg md:text-xl lg:text-2xl text-red-500 font-medium ">${itemPrice}</h6>

                    </div>

                    <div className="flex items-center justify-start gap-2">

                        <h6 className="text-sm md:text-base lg:text-lg font-medium">Item Rating:</h6>
                        <h6 className="text-sm md:text-base lg:text-lg font-medium text-orange-600">{itemRating}</h6>

                    </div>

                    <div className="flex items-center justify-start gap-2">

                        <h6 className="text-sm md:text-base lg:text-lg font-medium">Customization:</h6>
                        <h6 className="text-sm md:text-base lg:text-lg font-medium text-red-500">{itemCustomization}</h6>

                    </div>

                    <div className="flex items-center justify-start gap-2">

                        <h6 className="text-sm md:text-base lg:text-lgfont-medium">Item Available:</h6>
                        <h6 className="text-sm md:text-base lg:text-lgfont-medium text-green-500">{itemStock}</h6>

                    </div>

                    <Link className='py-2 w-full bg-sky-900 hover:bg-sky-800 text-white text-center mt-4' to={`/updateCraftItems/${_id}`}>Update</Link>

                    <button onClick={() => handleDeleteButton(_id)} className='py-2 w-full bg-red-500 hover:bg-red-400 text-white text-center mt-4'>Delete</button>

                </div>

            </article>

        </div>
    );
};

export default SingleMyArtAndCraftList;