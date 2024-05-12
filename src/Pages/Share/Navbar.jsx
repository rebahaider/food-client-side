import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => toast.success('User successfully log out'))
            .catch(error => {
                toast.error(error)
            })
    }

    const navlinks = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/availableFoods"> Available Foods</NavLink></li>
        {
            user &&
            <>
                <li><NavLink to="/addFood">Add Food</NavLink></li>
                <li><NavLink to="/manageFood">Manage My Foods</NavLink></li>
                <li><NavLink to="/foodRequest">My Food Request</NavLink></li>
            </>
        }
        {/* <li><NavLink to="/login">Login</NavLink></li> */}
        <li><NavLink to="/signUp">Sign Up</NavLink></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <img src="/public/images.jpeg" className="w-20 h-20 rounded-full border-4 border-rose-600 mr-2" alt="" />
                    <Link to="/" className="text-2xl text-red-800 font-serif font-extrabold">PETUK</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <span className="mr-4">{user.email}</span>
                                <button onClick={handleSignOut} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white font-extrabold">Sign Out</span>
                                </button>
                            </>
                            :
                            <Link to="/login">
                                <button className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white font-extrabold">Log In</span>
                                </button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;