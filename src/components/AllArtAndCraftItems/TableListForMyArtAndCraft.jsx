import { Link } from "react-router-dom";

const TableListForMyArtAndCraft = ({ item }) => {

    const { itemName, itemRating, itemPrice, itemStock, _id } = item;

    return (

        <tbody>

            <tr>
                <td>
                    {itemName}
                </td>
                <td>
                    {itemRating}
                </td>
                <td>
                    {itemPrice}
                </td>
                
                <td>
                    <Link to={`/craftItem/${_id}`} className="btn btn-ghost btn-xs">View Details</Link>
                </td>
            </tr>

        </tbody>

    );
};

export default TableListForMyArtAndCraft;