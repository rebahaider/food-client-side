import Carousel from 'react-elastic-carousel'

const Slider = () => {
    return (
        <div>
            <h1 className="text-5xl text-red-800 font-extrabold text-center mb-10">Great Tasting Items</h1>
            <Carousel enableAutoPlay autoPlaySpeed={1500}>

                <img src="https://i.ibb.co/WyzJ2hT/spaghetti-with-mixed-ingredients-white-plate.jpg" alt="" />
                <img src="https://i.ibb.co/177LfpP/top-view-tasty-meat-soup-with-potatoes-seasonings-dark-desk.jpg" alt="" />
                <img src="https://i.ibb.co/Hnc5pGt/vegetarian-risotto-with-fresh-mushrooms-parmesan-cheese-generated-by-ai.jpg" alt="" />
                <img src="https://i.ibb.co/Ns6CPfn/apetizer-salad-with-mozarella-tomato-rolls.jpg" alt="" />
                <img src="https://i.ibb.co/0q4NB0k/top-view-caesar-salad-oval-plate-green-white-checkered-tablecloth-fork-knife-dark-red-background.jpg" alt="" />
                <img src="https://i.ibb.co/mctspWp/fried-vegetables-with-sauce-pan.jpg" alt="" />

            </Carousel>
        </div>

    );
};

export default Slider;