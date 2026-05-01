"use client"

import { Montserrat } from "next/font/google";


import Link from "next/link";


import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineContactEmergency } from "react-icons/md";

import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";



const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function ContactUs() {

    return (
        <>
            <div className={montserrat.className}>

                <Navbar></Navbar>
                <section className="w-full flex items-center justify-center">
                    <div className="w-[85%] flex p-5 items-center">
                        <ul className="flex gap-5 group-hover:cursor-pointer ">
                            <li>
                                <Link href="/" className="text-[18px] hover:text-[#748C70] " >Home</Link>
                            </li>
                            /
                            <li>
                                <Link href="" className="hover:text-[#748C70]" >Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center mt-[3%]">
                    <div className="w-[85%] flex flex-col gap-5">
                        <h1 className="text-[32px] capitalize font-semibold">Contact Us</h1>
                        <div className="bg-[#F0F2EF] flex flex-col gap-5 p-3">
                            <p className="text-black">We always love hearing from our customers! Please do not hesitate to contact us should you have any questions regarding our products and sizing recommendations or inquiries about your current order.
                            </p>
                            <p> Contact our Customer Care team through the contact form below, email us at hello@modimal.com or live chat with us via our chat widget on the bottom right hand corner of this page.</p>
                            <p>We will aim to respond to you within 1-2 business days.</p>
                        </div>

                    </div>
                </section>

                <section className="w-full flex items-center justify-center mt-[3%]">
                    <div className="w-[70%] flex flex-col gap-5">
                        <div className="flex gap-3 items-center">
                            <MdOutlineMailOutline className="size-5"></MdOutlineMailOutline>
                            <h1 className="text-[24px] font-bold">Write Us</h1>
                        </div>
                        <p className="text-[20px] font-bold">Your information</p>
                        <form className="w-full flex flex-col gap-5 text-[#606060 ] ">
                            <input type="text" placeholder="Full Name" className=" border-b-2 py-3 w-full pl-[2%]  focus:outline-none focus:ring-0"></input>
                            <input type="text" placeholder="Email" className=" border-b-2 py-3 w-full pl-[2%] focus:outline-none focus:ring-0"></input>
                            <input type="text" placeholder="Subject" className=" border-b-2 py-3 w-full pl-[2%] focus:outline-none focus:ring-0"></input>
                            <input type="text" placeholder="Order Number" className=" border-b-2 py-3 w-full pl-[2%] focus:outline-none focus:ring-0"></input>
                            <input type="text" placeholder="Message" className=" border-b-2 py-3 w-full pl-[2%] focus:outline-none focus:ring-0"></input>
                            <div className="flex gap-4 items-center">
                                <input type="checkbox" className="size-5"></input>
                                <p>I have read and understood the contact us privacy and policy.</p>
                            </div>
                            <div className="flex justify-end">
                                <button className="w-[30%] py-3 text-white bg-[#5A6D57] hover:cursor-pointer">Send</button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center mt-[3%]">
                    <div className="w-[85%] flex justify-between">
                        <div className="w-[32%] flex flex-col justify-center items-center gap-3 bg-[#F0F2EF] p-3">
                            <MdOutlineMessage className="size-7"></MdOutlineMessage>
                            <h3 className="text-[16px] font-bold">Chat with us</h3>
                            <p className="text-[12px]">We are here and ready to chat</p>
                            <button className="w-full border-[#5A6D57] border-2 py-2 text-[#5A6D57] text-[14px] hover:cursor-pointer">Start chat</button>
                        </div>
                        <div className="w-[32%] flex flex-col justify-center items-center gap-3 bg-[#F0F2EF] p-3">
                            <MdOutlineContactEmergency className="size-7"></MdOutlineContactEmergency>
                            <h3 className="text-[16px] font-bold">Call us</h3>
                            <p className="text-[12px]">We're here to Talk to You</p>
                            <button className="w-full border-[#5A6D57] border-2 py-2 text-[#5A6D57] text-[14px] hover:cursor-pointer">+1(929)460-3208</button>
                        </div>
                        <div className="w-[32%] flex flex-col justify-center items-center gap-3 bg-[#F0F2EF] p-3">
                            <MdOutlineMailOutline className="size-7"></MdOutlineMailOutline>
                            <h3 className="text-[16px] font-bold">Email Us</h3>
                            <p className="text-[12px]">You are welcome to send us an email</p>
                            <button className="w-full border-[#5A6D57] border-2 py-2 text-[#5A6D57] text-[14px] hover:cursor-pointer">Send Email</button>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </>
    )
}