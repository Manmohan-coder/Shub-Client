import { useState } from "react"
import { RiEyeLine, RiEyeCloseLine, RiMailCheckLine, RiUserAddLine } from "@remixicon/react"
const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }
    return (
        <>
            <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-center text-gray-800 ">Create Account</h2>
                <h5 className="text-2xl font-bold text-center text-gray-800 ">or</h5>

                <p className="text-sm text-center text-gray-400 mb-4"> use your email for registration</p>
                <form onSubmit={((e) => e.preventDefault())} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiUserAddLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiUserAddLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
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
                    <button
                        type="submit"
                        className="w-full bg-[#A53860] text-white py-3 rounded-md hover:bg-[#670D2F] transition"
                    >SIGN-UP
                    </button>
                </form>
            </div>
        </>
    )
}

export default SignUp
