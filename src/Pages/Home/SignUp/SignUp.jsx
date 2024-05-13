import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {

    // set dynamic title
    useEffect(() => {
        document.title = "PETUK | SignUp"
    })

    // const [signUpError, setSignUpError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = { name, email, password, photo };
        console.log(user);

        // password validation

        if (password.length < 6) {
            toast.error("Password should be at least 6 characters or more");
            return;
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(password)) {
            toast.error("Your password should be have at least one lower case & one upper case");
            return;
        }

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                navigate("/");
                toast.success('Successfully Registered'), {
                    position: "top-center",
                    theme: "colored"
                }


            })
            .catch(error => {
                console.error(error);

                toast.error(error.message), {
                    position: "top-center",
                    theme: "colored"
                }

            })
    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-200 text-gray-800 mx-auto mt-10 mb-10">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleSignUp} action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Name</label>
                    <input type="text" name="name" id="username" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:border-violet-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Email</label>
                    <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:border-violet-600" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-gray-600">Password</label>
                    <div className="flex items-center relative">
                        <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:border-violet-600" required />
                        <span className="absolute right-5" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>

                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Photo URL</label>
                    <input type="text" name="photo" id="username" placeholder="Photo URL.." className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:border-violet-600" required />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Sign Up</button>

            </form>
            <ToastContainer
                position="top-center"
                theme="colored"
            ></ToastContainer>

            <p className="text-xs text-center sm:px-6 font-bold text-black">Do not have an account?
                <Link to="/login" rel="noopener noreferrer" href="#" className="underline text-violet-800 font-extrabold">  Login</Link>
            </p>
        </div>
    );
};

export default SignUp;