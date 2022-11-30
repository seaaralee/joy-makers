import React from "react";
import { FaFacebook, FaLinkedin, FaGoogle, FaRegEnvelope, FaRegAddressCard } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 font-['Poppins']">

            <main className=" bg-white flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">

                    {/* SIGN */}
                    <div className="w-3/5 bg-green-800 text-white rounded-tl-2xl rounded-bl-2xl py-36 px-12">
                        <h2 className="text-3xl font-bold mb-2"> Welcome Back!</h2>
                        <div className="bg-white border-2 w-10 border-white inline-block rounded-full mb-2"></div>
                        <p className="mb-10">
                            Sign In to your JoyMakers Account
                        </p>
                        <a href="/login" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-800">Sign In</a>
                    </div>

                    {/* SIGN */}
                    <div className="w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="text-green-800">Joy</span>Makers
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-green-800 mb-2">
                                Sign Up
                            </h2>
                            <div className="bg-white border-2 w-10 border-white inline-block rounded-full mb-2"></div>
                            <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegAddressCard className="text-gray-400 m-2"/>
                                <input type="name" name="name" placeholder="Name" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className="text-gray-400 m-2"/>
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <MdLockOutline className="text-gray-400 m-2"/>
                                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                            </div>
                            <p className="text-gray-400 my-3"> or use your personal account</p>
                            <div className="flex justify-center my-2">
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaFacebook className="text-sm"/>
                                </a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaLinkedin className="text-sm"/>
                                </a>
                                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaGoogle className="text-sm"/>
                                </a>
                            </div>
                            <div className="bg-white border-2 w-10 border-white inline-block rounded-full mb-2"></div>
                                <a href="#" className="border-2 border-green-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white">
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SignUp;