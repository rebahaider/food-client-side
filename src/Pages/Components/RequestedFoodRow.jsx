import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const RequestedFoodRow = ({ food, handleDelete }) => {
    const { user } = useContext(AuthContext);

    const { _id, image, name, quantity, expired_date_time, additional_notes, donator_image, donator_name, pickup_location, food_status } = food;


    return (
        <div>
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{pickup_location}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={donator_image} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{donator_name}</div>
                            <div className="text-sm opacity-50">{user?.email}</div>
                        </div>
                    </div>
                </td>
                <td>{expired_date_time}</td>
                <td>{quantity}</td>
                <td>{additional_notes}</td>
                <td>{food_status}</td>
                <th>
                    <button className="px-6 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                        <Link to={`/updateFood/${_id}`}><span className="relative group-hover:text-white font-extrabold">Update</span></Link>
                    </button>
                </th>
            </tr>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default RequestedFoodRow;