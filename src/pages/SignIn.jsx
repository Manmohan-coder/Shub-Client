import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine, RiMailCheckLine } from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncLoginUser } from "../stores/actions/userActions";

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const [showPassword, setShowPassword] = useState()

    const submitHandler = async (data) => {
        try {
            await dispatch(asyncLoginUser(data))
            toast.success('Log-in Successful!')
            setTimeout(() => {
                navigate('/')
            }, 1500);
            reset()

        } catch (err) {
            if (err.response?.data?.message) {
                toast.error(err.response.data.message); // "Error message during registered"
            } else if (err.response?.data?.errors) {
                const messages = err.response.data.errors.map(err => err.msg).join('\n');
                toast.error(messages);
            } else {
                toast.error("Log-In Failed Something went wrong. Please try again.");
            }

        }
    }


    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }
    return (
        <>
            <ToastContainer autoClose={1500} />
            <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                <p className="text-sm text-center text-gray-400 mb-4">or use your account</p>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <div className="relative">
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Enter Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiMailCheckLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: true })}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /> <span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer" onClick={togglePassword}>{showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </span>
                    </div>

                    <Link to="/" className="text-sm text-[#A53860] hover:underline">
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
