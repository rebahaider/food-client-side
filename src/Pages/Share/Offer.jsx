import Marquee from "react-fast-marquee";

const Offer = () => {
    return (
        <div className="mt-1 flex">
            <button href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white font-extrabold">Offers!!!</span>
            </button>
            <Marquee pauseOnHover={true}>
                
                    <p className="mr-12 font-bold">50% off on every pizza!!!!</p>
                    <p className="mr-12 font-bold">Buy one get one free offer!!! </p>
                    <p className="mr-12 font-bold">Buy one berger get one chicken fry!!!!</p>
                    <p className="mr-12 font-bold">Buy three berger get two chicken fry!!!!</p>
                    <p className="mr-12 font-bold">Buy one special berger get free french fry!!!!</p>
                

            </Marquee>
        </div>
    );
};

export default Offer;