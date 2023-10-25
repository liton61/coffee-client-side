import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const user = { email };
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            alert("User added to database !")
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="bg-[#F4F3F0] flex items-center justify-center">
            <div className="bg-white w-96 p-8 rounded-lg shadow-lg my-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Register</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                        <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your full name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                    </div>
                </form>
                <p className="text-gray-600 text-sm text-center">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
            </div>
        </div>
    );
};

export default SignUp;