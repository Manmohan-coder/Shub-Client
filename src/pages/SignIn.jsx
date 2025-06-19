import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine, RiMailCheckLine } from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from "../stores/reducers/userSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = async (data) => {
        try {
            await dispatch(loginUser(data)).unwrap();
            toast.success("Log-In Successfully");
            reset();
            navigate("/");
        } catch (err) {
            if (err?.response?.data?.message) {
                toast.error(err.response.data.message);
            } else if (err?.response?.data?.errors) {
                const messages = err.response.data.errors.map(e => e.msg).join('\n');
                toast.error(messages);
            } else if (typeof err === "string") {
                toast.error(err);
            } else {
                toast.error("Log-In Failed. Something went wrong. Please try again.");
            }
        }
    };

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <>
            <ToastContainer autoClose={1500} />
            <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
                <p className="text-sm text-center text-gray-400 mb-4">or use your account</p>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <div className="relative">
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Enter Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        />
                        <span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer">
                            <RiMailCheckLine />
                        </span>
                        {errors.email && (
                            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: "Password is required" })}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        />
                        <span
                            className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"
                            onClick={togglePassword}
                        >
                            {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </span>
                        {errors.password && (
                            <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <Link to="/" className="text-sm text-[#A53860] hover:underline">
                        Forgot your password?
                    </Link>
                    <button
                        type="submit"
                        className="w-full bg-[#A53860] text-white py-3 mt-5 rounded-md hover:bg-[#670D2F] transition"
                    >
                        Log-in
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignIn;
