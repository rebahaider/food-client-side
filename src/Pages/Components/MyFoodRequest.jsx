import { useEffect, useState } from "react";
import FoodRequestCard from "./FoodRequestCard";


const MyFoodRequest = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "PETUK | MyFoodRequest"
    })

    const [requestedFoods, setRequestedFoods] = useState([]);

    useEffect(() => {
        fetch('https://food-server-side-e4dyfad2l-reba-haiders-projects.vercel.app/requestFoodItems')
            .then(res => res.json())
            .then(data => setRequestedFoods(data));
    }, [])

    return (
        <div>
            <h3 className="text-5xl text-red-800 font-extrabold text-center mt-10 mb-20">Your Requested Foods</h3>
            <div className="space-y-10">
                {
                    requestedFoods.map(food=> <FoodRequestCard key={food.id} food={food}></FoodRequestCard>)
                }
            </div>
        </div>
    );
};

export default MyFoodRequest;