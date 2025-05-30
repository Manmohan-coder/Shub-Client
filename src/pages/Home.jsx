import { useState } from "react";
import {
    RiEyeLine,
    RiEyeCloseLine,
    RiMailCheckLine,
    RiUserAddLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";

export default function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState({});
    const [isSignUp, setIsSignUp] = useState(false);

    const togglePanel = () => {
        setIsSignUp(!isSignUp);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
        setUserData({
            email: email,
            password: password,
        });
        console.log(userData);
    };

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-200 px-4">
            <div className="relative w-full max-w-6xl h-full md:h-[600px] rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Mobile View Toggle */}
                <div className="block md:hidden bg-white p-6 w-full">
                    {isSignUp ? (
                        <SignUpForm showPassword={showPassword} togglePassword={togglePassword} />
                    ) : (
                        <SignInForm
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            showPassword={showPassword}
                            togglePassword={togglePassword}
                            submitHandler={submitHandler}
                        />
                    )}
                    <div className="text-center mt-4">
                        <button
                            className="text-[#A53860] underline font-medium"
                            onClick={togglePanel}
                        >
                            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                        </button>
                    </div>
                </div>

                {/* Desktop View Forms */}
                <div className="hidden md:flex w-full">
                    <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                        <SignInForm
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            showPassword={showPassword}
                            togglePassword={togglePassword}
                            submitHandler={submitHandler}
                        />
                    </div>

                    <div className="w-1/2 bg-white p-10 flex flex-col justify-center">
                        <SignUpForm showPassword={showPassword} togglePassword={togglePassword} />
                    </div>

                    {/* Sliding Panel */}
                    <div
                        className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-[#670D2F] to-[#A53860] text-white p-10 transition-all duration-700 ease-in-out z-30 flex-col justify-center items-center hidden md:flex ${isSignUp ? "left-1/2" : "left-0"
                            }`}
                    >
                        {isSignUp ? (
                            <>
                                <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                                <p className="mb-6 text-center">
                                    To keep connected with us please login with your personal info
                                </p>
                                <button
                                    className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-[#670D2F] transition"
                                    onClick={() => setIsSignUp(false)}
                                >
                                    SIGN IN
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
                                <p className="mb-6 text-center">
                                    Enter your personal details and start your journey with us
                                </p>
                                <button
                                    className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-[#A53860] transition"
                                    onClick={togglePanel}
                                >
                                    SIGN UP
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const SignInForm = ({
    email,
    password,
    setEmail,
    setPassword,
    showPassword,
    togglePassword,
    submitHandler,
}) => (
    <form onSubmit={submitHandler} className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Register</h2>
        <p className="text-sm text-center text-gray-400 mb-4">or use your account</p>
        <div className="relative">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
            />
            <span className="absolute right-2 top-7 -translate-y-1/2 cursor-pointer">
                <RiMailCheckLine />
            </span>
        </div>
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
            />
            <span
                className="absolute right-2 top-7 -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
            >
                {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </span>
        </div>
        <Link to="/" className="text-sm text-[#A53860] hover:underline">
            Forgot your password?
        </Link>
        <button
            type="submit"
            className="w-full bg-[#A53860] text-white py-3 mt-2 rounded-md hover:bg-[#670D2F] transition"
        >
            Log-in
        </button>
    </form>
);

const SignUpForm = ({ showPassword, togglePassword }) => (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
        <p className="text-sm text-center text-gray-400 mb-4">Use your email for registration</p>
        <div className="relative">
            <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
            />
            <span className="absolute right-2 top-7 -translate-y-1/2 cursor-pointer">
                <RiUserAddLine />
            </span>
        </div>
        <div className="relative">
            <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
            />
            <span className="absolute right-2 top-7 -translate-y-1/2 cursor-pointer">
                <RiUserAddLine />
            </span>
        </div>
        <div className="relative">
            <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
            />
            <span className="absolute right-2 top-7 -translate-y-1/2 cursor-pointer">
                <RiMailCheckLine />
            </span>
        </div>
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
            />
            <span
                className="absolute right-2 top-7 -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
            >
                {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
            </span>
        </div>
        <button
            type="submit"
            className="w-full bg-[#A53860] text-white py-3 rounded-md hover:bg-[#670D2F] transition"
        >
            SIGN-UP
        </button>
    </form>
);
