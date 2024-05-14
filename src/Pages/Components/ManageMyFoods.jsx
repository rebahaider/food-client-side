import { useContext, useEffect, useState } from "react";
import RequestedFoodRow from "./RequestedFoodRow";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const ManageMyFoods = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "PETUK | ManageMyFoods"
    })

    const [requestedFoods, setRequestedFoods] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://food-server-side.vercel.app/requestFoodItems?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRequestedFoods(data));
    }, []);

    // delete 
    const handleDelete = id => {
        const proceed = toast.warn('Are you sure you want to delete this items');
        if (proceed) {
            fetch(`https://food-server-side.vercel.app/requestFoodItems/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = requestedFoods.filter(food => food._id !== id);
                        setRequestedFoods(remaining);
                    }
                })
        }
    }

    

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestedFoods.map(food => <RequestedFoodRow key={food.id} food={food} handleDelete={handleDelete} ></RequestedFoodRow>)
                        }

                    </tbody>

                </table>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ManageMyFoods;