import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";


const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://food-server-side.vercel.app/foodItems')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div>
            <h3 className="text-5xl text-red-800 font-extrabold text-center mt-10 mb-20">Featured Foods</h3>
            <div className="space-y-10">
                {
                    foods.map(food => <FeaturedFoodCard key={food.id} food={food}></FeaturedFoodCard>)
                }
            </div>
        </div>

    );
};

export default FeaturedFoods;