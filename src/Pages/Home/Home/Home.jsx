import { useEffect } from "react";
import Slider from "../Slider";
import SpecialItems from "../SpecialItems";
import FeaturedFoods from "./FeaturedFoods";



const Home = () => {

      // set dynamic title
      useEffect(() => {
        document.title = "PETUK"
    })

    return (
        <div>
            
            <Slider></Slider>
            <FeaturedFoods></FeaturedFoods>
            <SpecialItems></SpecialItems>
            
        </div>
    );
};

export default Home;