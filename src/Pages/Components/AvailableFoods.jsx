import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";



const AvailableFoods = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "PETUK | AvailableFoods"
    })

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('https://food-server-side.vercel.app/foodItems')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    return (
        <div>
            <h3 className="text-5xl text-red-800 font-extrabold text-center mt-10 mb-20">All Available Foods At A Glance</h3>

            <div className="space-y-10">
                {
                    foods.map(food => <AvailableFoodCard key={food.id} food={food}></AvailableFoodCard>)
                }
            </div>

        </div>
    );
};

export default AvailableFoods;