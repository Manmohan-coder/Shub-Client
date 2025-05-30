import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SlidingPanel from "./SlidingPanel";

export default function AuthForm() {


    return (
        <div className="p-10 flex items-center justify-center bg-emerald-200">
            <div className="relative w-full max-w-4xl h-auto md:h-[600px] rounded-2xl shadow-lg overflow-hidden">
                {/* Container for Forms */}
                <div className="flex flex-col gap-7 md:flex-row md:gap-0 h-full ">
                    {/* Sign In Form */}
                    <SignIn />

                    {/* Sign Up Form */}
                    <SignUp />
                </div>

                {/* Sliding Panel */}
                <SlidingPanel />

            </div>
        </div>
    );
}

const SocialButton = ({ icon }) => (
    <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
        {icon}
    </button>
);