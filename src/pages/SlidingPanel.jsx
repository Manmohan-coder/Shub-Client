import { useState } from "react";

const SlidingPanel = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const togglePanel = () => {
        setIsSignUp(!isSignUp);
    };
    return (
        <>
            <div className={`absolute top-0 h-full w-full md:w-1/2 bg-gradient-to-r from-[#670D2F] to-[#A53860] text-white p-10 transition-all duration-700 ease-in-out z-30 md:flex flex-col justify-center items-center ${isSignUp ? "md:left-1/2" : "md:left-0"} hidden`}>
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

        </>
    )
}

export default SlidingPanel
