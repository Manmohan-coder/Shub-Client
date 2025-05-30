import { useState } from "react"
import { RiEyeCloseLine, RiEyeLine, RiMailCheckLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail('')
        setPassword('')
        setUserData({
            email: email,
            password: password,
        })
        console.log(userData);
    }

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }
    return (
        <>
            <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                <p className="text-sm text-center text-gray-400 mb-4">or use your account</p>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiMailCheckLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /> <span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer" onClick={togglePassword}>{showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </span>
                    </div>

                    <Link href="/" className="text-sm text-[#A53860] hover:underline">
                        Forgot your password?
                    </Link>
                    <button
                        type="submit"
                        className="w-full bg-[#A53860] text-white py-3 mt-5 rounded-md hover:bg-[#670D2F] transition">
                        Log-in
                    </button>
                </form>
            </div>

        </>
    )
}

export default SignIn
