import { useState } from "react"
import { RiEyeLine, RiEyeCloseLine, RiMailCheckLine, RiUserAddLine } from "@remixicon/react"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { asyncRegisterUser } from "../stores/actions/userActions";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, formState: { errors } } = useForm()



    const submitHandler = async (data) => {
        const userData = {
            fullname: {
                firstname: data.firstname,
                lastname: data.lastname
            },
            email: data.email,
            password: data.password
        };
        try {
            await dispatch(asyncRegisterUser(userData)).unwrap()
            toast.success('User Register successfully!')
            reset()
        } catch (error) {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else if (error?.response?.data?.errors) {
                const messages = error.response.data.errors.map((err) => err.msg).join("\n");
                toast.error(messages);
            } else {
                toast.error("Registration failed. Please try again.");
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
                <h2 className="text-2xl font-bold text-center text-gray-800 ">Create Account</h2>
                <h5 className="text-2xl font-bold text-center text-gray-800 ">or</h5>

                <p className="text-sm text-center text-gray-400 mb-4"> use your email for registration</p>
                <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            {...register("firstname", { required: "First name is required" })}
                            placeholder="First Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiUserAddLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            {...register('lastname')}
                            placeholder="Last Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiUserAddLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required"
                            })}
                            placeholder="Enter Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /><span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer"><RiMailCheckLine /></span>
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#670D2F]"
                        /> <span className="absolute right-2 top-7 translate-y-[-50%] cursor-pointer" onClick={togglePassword}>{showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </span>
                        {errors.password && (
                            <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#A53860] text-white py-3 rounded-md hover:bg-[#670D2F] transition"
                    >Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default SignUp
