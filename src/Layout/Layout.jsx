import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer";
import Navbar from "../Pages/Share/Navbar";
import Offer from "../Pages/Share/Offer";


const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-28">
            <Navbar></Navbar>
            <Offer></Offer>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;