

const SpecialItems = () => {
    return (
        <div>
            <h3 className="text-3xl text-red-800 font-extrabold text-center mt-10">MOUTH WATERING</h3>
            <h3 className="text-5xl text-red-800 font-extrabold text-center mt-10 mb-20">Chef's Special Menus</h3>

            <div className="grid sm:grid-cols-1 md:grid-cols-4 text-center">
                <div className="bg-base-300 rounded-3xl mx-auto p-6 space-y-4 mb-4 ">
                    <img className="w-60 h-60 rounded-full" src="https://i.ibb.co/DgVSTbs/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese-90220-1063.jpg" alt="" />
                    <h1 className="text-2xl font-bold text-red-800">Burger</h1>
                    <h1 className="text-2xl font-bold text-red-800">10+ Varieties</h1>
                </div>
                <div className="bg-base-300 rounded-3xl mx-auto p-6 space-y-4 mb-4">
                    <img className="w-60 h-60 rounded-full" src="https://i.ibb.co/7V1J5Fh/pictou-county-pizza-isolated-transparent-background-191095-32844.jpg" alt="" />
                    <h1 className="text-2xl font-bold text-red-800">Pizza</h1>
                    <h1 className="text-2xl font-bold text-red-800">3+ Varieties</h1>
                </div>
                <div className="bg-base-300 rounded-3xl mx-auto p-6 space-y-4 mb-4">
                    <img className="w-60 h-60 rounded-full" src="https://i.ibb.co/SfZhN2w/penne-pasta-1339-932.jpg" alt="" />
                    <h1 className="text-2xl font-bold text-red-800">Pasta</h1>
                    <h1 className="text-2xl font-bold text-red-800">7+ Varieties</h1>
                </div>
                <div className="bg-base-300 rounded-3xl mx-auto p-6 space-y-4">
                    <img className="w-60 h-60 rounded-full" src="https://i.ibb.co/BK1T3DN/delicious-coffee-beans-cup-23-2150691429.jpg" alt="" />
                    <h1 className="text-2xl font-bold text-red-800">Coffee</h1>
                    <h1 className="text-2xl font-bold text-red-800">5+ Varieties</h1>
                </div>
            </div>
        </div>
    );
};

export default SpecialItems;