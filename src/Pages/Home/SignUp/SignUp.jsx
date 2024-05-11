import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const SignUp = () => {

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

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
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
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:border-violet-600" required />

                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Photo URL</label>
                    <input type="text" name="photo" id="username" placeholder="Photo URL.." className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 hover:border-violet-600" required />
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Sign Up</button>
            </form>

            <p className="text-xs text-center sm:px-6 font-bold text-black">Do not have an account?
                <Link to="/login" rel="noopener noreferrer" href="#" className="underline text-violet-800 font-extrabold">  Login</Link>
            </p>
        </div>
    );
};

export default SignUp;