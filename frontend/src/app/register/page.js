"use client"

import { Montserrat } from "next/font/google";


import { IoHeartOutline, IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";


import { FcGoogle } from "react-icons/fc";


import Link from "next/link";

import { useState } from "react";

import axios from "axios";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

import { useRouter } from "next/navigation";
import Footer from "../components/footer/footer";


export default function register() {

    const router = useRouter();
    // console.log(router);


    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [users, setUsers] = useState([]);

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    console.log(user);
    console.log(users);

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log(BASE_URL);


    const handleOnSubmit = () => {
        setUsers([...users, user]);
        axios.post(`${BASE_URL}/add-user`, user)
            .then((data) => console.log(data.data))
            .catch((e) => console.log(e))

        alert("register successfull");

        localStorage.setItem("showVerify", "true");

        router.push("/");

        setUser({ firstName: "", lastName: "", email: "", password: "" });
    }





    return (
        <>
            <div className={montserrat.className}>

                <header className="w-full flex flex-col items-center justify-center">
                    <div className="w-full bg-[#5A6D57] flex items-center justify-center py-2">
                        <p className="text-white text-[12px] ">Enjoy Free Shipping On All Orders</p>
                    </div>
                    <nav className="w-[85%] flex items-center justify-between py-3">
                        <img src="/images/logo.png" width={200} height={200} alt="logo" ></img>
                        <div className="w-[45%] relative flex justify-between">
                            <a className="hover:cursor-pointer">Collection</a>
                            <a className="hover:cursor-pointer">New In</a>
                            <a className="hover:cursor-pointer">Modiweek</a>
                            <a className="hover:cursor-pointer">Plus Size</a>
                            <a className="hover:cursor-pointer">Sustainability</a>
                        </div>
                        <div className="w-[13%] flex justify-between ">
                            <IoSearch className="size-5 hover:cursor-pointer"></IoSearch>
                            <FiUser className="size-5 hover:cursor-pointer"></FiUser>
                            <IoHeartOutline className="size-5 hover:cursor-pointer"></IoHeartOutline>
                            <MdOutlineShoppingBag className="size-5 hover:cursor-pointer"></MdOutlineShoppingBag>
                        </div>
                    </nav>
                </header>

                <section className="w-full flex justify-center mt-[3%] ">
                    <div className="w-[85%] flex ">
                        <div className="w-[50%]">
                            <img src="/images/author.jpg" className="h-220 w-full"></img>
                        </div>
                        <div className="w-[50%] flex flex-col items-center mt-[8%] gap-5">
                            <h1 className="text-[32px] font-semibold ">Create Account</h1>
                            <div className="flex flex-col w-[60%] gap-5">
                                <input type="text" name="firstName" onChange={(e) => handleOnChange(e)} value={user.firstName} placeholder="first name" className="w-full border-2 border-[#606060] p-3"></input>
                                <input type="text" name="lastName" onChange={(e) => handleOnChange(e)} value={user.lastName} placeholder="last name" className="w-full border-2 border-[#606060] p-3"></input>
                                <input type="text" name="email" onChange={(e) => handleOnChange(e)} value={user.email} placeholder="email" className="w-full border-2 border-[#606060] p-3"></input>
                                <input type="password" name="password" onChange={(e) => handleOnChange(e)} value={user.password} placeholder="password" className="w-full border-2 border-[#606060] p-3"></input>
                                <button type="button" onClick={handleOnSubmit} className="bg-[#5A6D57] w-full py-3 text-white text-[14px] hover:cursor-pointer ">Register Now</button>
                            </div>
                            <div className="flex gap-5">
                                <p>Already have an account?</p>
                                <Link href="/login" className="text-[#748C70] hover:cursor-pointer ">log in</Link>
                                {/* <button className="hover:cursor-pointer" onClick={()=>router.push('/login')}>Log in</button> */}



                            </div>
                            <p>or</p>
                            <div className="flex items-center gap-3 hover:cursor-pointer ">
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35 17.5C35 27.16 27.1687 35 17.5 35C7.83125 35 0 27.16 0 17.5C0 7.83125 7.83125 0 17.5 0C27.1687 0 35 7.83125 35 17.5Z" fill="#202020" />
                                    <path d="M25.4996 13.0717C25.4122 13.1274 23.3338 14.3031 23.3338 16.9098C23.4318 19.8826 25.9567 20.9252 26 20.9252C25.9567 20.9809 25.6188 22.3454 24.6179 23.7757C23.8236 25.0078 22.942 26.25 21.6032 26.25C20.3297 26.25 19.8726 25.4289 18.4032 25.4289C16.8252 25.4289 16.3787 26.25 15.1705 26.25C13.8317 26.25 12.8848 24.9412 12.0472 23.7207C10.959 22.1233 10.034 19.6164 10.0014 17.2093C9.97937 15.9338 10.2193 14.68 10.8284 13.6151C11.688 12.1283 13.2227 11.1191 14.8986 11.0858C16.1828 11.0416 17.3256 11.9843 18.1093 11.9843C18.8603 11.9843 20.2644 11.0858 21.853 11.0858C22.5388 11.0865 24.3673 11.297 25.4996 13.0717ZM18.0007 10.8311C17.7721 9.66629 18.4032 8.50148 18.9909 7.75847C19.742 6.8599 20.9281 6.25 21.951 6.25C22.0163 7.41481 21.6025 8.55719 20.8628 9.3892C20.1991 10.2878 19.0562 10.9642 18.0007 10.8311Z" fill="white" />
                                </svg>

                                <FcGoogle className="size-10"></FcGoogle>
                                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="35" height="35" rx="17.5" fill="#1877F2" />
                                    <path d="M24.312 22.5586L25.0879 17.5H20.2344V14.2188C20.2344 12.8345 20.9111 11.4844 23.085 11.4844H25.293V7.17773C25.293 7.17773 23.29 6.83594 21.376 6.83594C17.377 6.83594 14.7656 9.25928 14.7656 13.6445V17.5H10.3223V22.5586H14.7656V34.7881C15.6577 34.9282 16.5703 35 17.5 35C18.4297 35 19.3423 34.9282 20.2344 34.7881V22.5586H24.312Z" fill="white" />
                                </svg>

                            </div>
                            <p className="w-[60%] text-center capitalize text-[12px]">by clicking register now’’you agree to <span className="text-[#748C70] underline">terms& conditions</span> and <span className="text-[#748C70] underline">privacy policy.</span>  </p>
                        </div>
                    </div>

                </section>

                <Footer></Footer>
            </div>
        </>
    )

}