import { Link } from "react-router-dom";


const FeaturedFoodCard = ({ food }) => {
    const { image, name, quantity, expired_date_time, additional_notes, donator_image, donator_name, pickup_location } = food;
    return (
        <section className="bg-gray-200 text-gray-800 rounded-2xl">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={image} alt="" className="object-contain rounded-3xl" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl font-bold leading-none sm:text-3xl">Food Name:
                        <span className="text-violet-600">{name}</span>
                    </h1>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold leading-none sm:text-xl">Donator Details:</h1>
                        <h1 className="text-2xl font-bold leading-none sm:text-xl">
                            <span className="text-violet-600">{donator_name}</span>
                        </h1>
                        <img className="w-20 h-20 rounded-full" src={donator_image} alt="" />

                    </div>
                    <p className="text-lg sm:mb-12 font-bold">Food Quantity: <span className="text-violet-600">{quantity}</span></p>
                    <p className="text-lg sm:mb-12 font-bold">Pickup Location: <span className="text-violet-600">{pickup_location}</span></p>
                    <p className="text-lg sm:mb-12 font-bold">Expired Date/Time:<span className="text-violet-600">{expired_date_time}</span> </p>
                    <p className="text-lg sm:mb-12 font-bold">Additional Notes: <span className="text-violet-600">{additional_notes}</span></p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                        <button className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white font-extrabold">View Detail</span>
                        </button>
                        <button className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                            <Link to="/availableFoods"><span className="relative group-hover:text-white font-extrabold">Show All</span></Link>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedFoodCard;