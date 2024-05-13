import { Link } from "react-router-dom";

const AvailableFoodCard = ({ food }) => {

    const { _id, image, name, quantity, expired_date_time, additional_notes, donator_image, donator_name, pickup_location, donator_email } = food;
    return (

        <div>
            <section className="bg-gray-200 text-gray-800 rounded-2xl">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-20 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain rounded-3xl" />
                    </div>
                    <div className="flex flex-col justify-center gap-5 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold leading-none sm:text-3xl">Food Name:
                            <span className="text-violet-600">{name}</span>
                        </h1>
                        <div className="bg-base-200 p-4 rounded-3xl">
                            <h1 className="text-2xl font-bold leading-none sm:text-xl">Donator Details:</h1>
                            <img className="w-20 h-20 rounded-full" src={donator_image} alt="" />
                            <h1 className="text-2xl font-bold leading-none sm:text-xl">Doner Name:
                                <span className="text-violet-600">{donator_name}</span>
                            </h1>
                            <h1 className="text-2xl font-bold leading-none sm:text-xl">Doner Email:
                                <span className="text-violet-600">{donator_email}</span>
                            </h1>
                        </div>
                        <div className="bg-base-200 p-4 rounded-3xl">
                            <p className="text-lg  font-bold">Food Quantity: <span className="text-violet-600">{quantity}</span></p>
                            <p className="text-lg  font-bold">Pickup Location: <span className="text-violet-600">{pickup_location}</span></p>
                            <p className="text-lg  font-bold">Expired Date/Time:<span className="text-violet-600">{expired_date_time}</span> </p>
                            <p className="text-lg  font-bold">Additional Notes: <span className="text-violet-600">{additional_notes}</span></p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            </div>


                            <button className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                                <Link to={`/singlePage/${_id}`}><span className="relative group-hover:text-white font-extrabold">View Detail</span></Link>
                            </button>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AvailableFoodCard;