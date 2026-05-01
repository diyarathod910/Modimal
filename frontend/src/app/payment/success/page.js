"use client"

import { Montserrat } from "next/font/google";
 import Navbar from "@/app/components/header/navbar";

import Link from "next/link";

import { useRouter } from "next/navigation";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function Sucsess() {
    const router = useRouter();

    return (
        <>
            <div className={montserrat.className}>
                <Navbar></Navbar>

                <section className="w-full flex items-center justify-center mt-[7%]">
                    <div className="w-[85%] flex justify-center items-center flex-col gap-4">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5013 5.41602C17.5513 5.41602 5.41797 17.5493 5.41797 32.4994C5.41797 47.4494 17.5513 59.5827 32.5013 59.5827C47.4513 59.5827 59.5846 47.4494 59.5846 32.4994C59.5846 17.5493 47.4513 5.41602 32.5013 5.41602ZM32.5013 54.166C20.5576 54.166 10.8346 44.4431 10.8346 32.4994C10.8346 20.5556 20.5576 10.8327 32.5013 10.8327C44.4451 10.8327 54.168 20.5556 54.168 32.4994C54.168 44.4431 44.4451 54.166 32.5013 54.166ZM44.9326 20.5285L27.0846 38.3764L20.0701 31.3889L16.2513 35.2077L27.0846 46.041L48.7513 24.3744L44.9326 20.5285Z" fill="#00966D" />
                        </svg>
                        <h2 className="text-[#00966D] text-[40px]">Payment Successful</h2>
                        <p className="text-xl text-[#0C0C0C]">Thank you for choosing Modimal, Your order will be generated based on your delivery request. </p>
                        <p className="text-xl text-[#0C0C0C]">the Receipt has been sent to your email.</p>
                        <p className="text-lg text-[#404040]">Please Contact us for any query  </p>
                        <p className="text-[14px] text-[#404040]">+1(929)460-3208</p>
                        <p className="text-[14px] text-[#404040]">OR</p>
                        <p className="text-[14px] text-[#404040]">Hello @ modimal.com</p>
                    </div>
                </section>
            </div>
        </>
    )
}