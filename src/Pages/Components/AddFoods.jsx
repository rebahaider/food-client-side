import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";


const AddFoods = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "PETUK | AddFoods"
    })



    const { user } = useContext(AuthContext);

    const handleAddFood = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const pickup_location = form.pickup_location.value;
        const expired_date_time = form.expired_date_time.value;
        const additional_notes = form.additional_notes.value;
        const donator_image = form.donator_image.value;
        const donator_name = form.donator_name.value;
        const doner_email = form.doner_email.value;
        const food_status = form.food_status.value;

        const newFood = { name, image, quantity, pickup_location, expired_date_time, additional_notes, donator_image, donator_name, doner_email, food_status }

        console.log(newFood);

        // fetch server site
        fetch('https://food-server-side.vercel.app/foodItems', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Food Added Successfully');
                }
            })
    }

    return (
        <div>
            <h3 className="text-5xl text-red-800 font-extrabold text-center mt-10 mb-20">Add Your Food Items</h3>
            <form onSubmit={handleAddFood} className="space-y-6 md:px-20 pb-10">

                {/* image field */}
                <div className="">
                    <h1 className="text-xl font-bold mb-2">Image</h1>
                    <label>
                        <input type="text" name="image" placeholder="Image URL..." className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>

                {/* Food Name field */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Food Name</h1>
                    <label>
                        <input type="text" name="name" placeholder="Food Name" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>

                {/* doner details */}


                {/* image field */}
                <div className="">
                    <h1 className="text-xl font-bold mb-2">Doner Image</h1>
                    <label>
                        <input type="text" name="donator_image" placeholder="Image URL..." className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* doner name */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Doner Name</h1>
                    <label>
                        <input type="text" name="donator_name" defaultValue={user?.name} placeholder="Doner Name" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* doner email */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Doner Email</h1>
                    <label>
                        <input type="email" name="doner_email" defaultValue={user?.email} placeholder="Doner Email" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>

                {/* Food Quantity */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Food Quantity</h1>
                    <label>
                        <input type="text" name="quantity" placeholder="Food Quantity" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Pickup Location */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Pickup Location</h1>
                    <label>
                        <input type="text" name="pickup_location" placeholder="Pickup Location" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Expired Date/Time */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Expired Date/Time</h1>
                    <label>
                        <input type="date" name="expired_date_time" placeholder="Expired Date/Time" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>
                {/* Additional Notes */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Additional Notes</h1>
                    <label>
                        <input type="text" name="additional_notes" placeholder="Additional Notes" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>

                {/* Food Status */}
                <div>
                    <h1 className="text-xl font-bold mb-2">Food Status</h1>
                    <label>
                        <input type="text" name="food_status" defaultValue="Available" className="input input-bordered input-primary w-1/2" />
                    </label>
                </div>

                {/* ADD button */}
                <div>
                    <label>
                        <input type="submit" value="ADD" className="btn btn-primary w-1/2 text-white font-extrabold text-xl" />
                    </label>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddFoods;