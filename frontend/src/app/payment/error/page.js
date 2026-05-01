"use client"

import { Montserrat } from "next/font/google";
import Navbar from "@/app/components/header/navbar";
import { useRouter } from "next/navigation";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export default function Error() {
    const router = useRouter();


    return (
        <>
            <div className={montserrat.className}>

                <Navbar></Navbar>
                <section className="w-full flex items-center justify-center mt-[7%]">
                    <div className="w-[85%] flex justify-center items-center flex-col gap-5">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.5013 5.41602C17.5513 5.41602 5.41797 17.5493 5.41797 32.4994C5.41797 47.4494 17.5513 59.5827 32.5013 59.5827C47.4513 59.5827 59.5846 47.4494 59.5846 32.4994C59.5846 17.5493 47.4513 5.41602 32.5013 5.41602ZM35.2096 46.041H29.793V40.6244H35.2096V46.041ZM35.2096 35.2077H29.793V18.9577H35.2096V35.2077Z" fill="#C30000" />
                        </svg>
                        <h2 className="text-[#C30000] text-[40px] font-bold">Sorry, Payment failed</h2>
                        <p className="text-xl text-[#0C0C0C] w-[80%] text-center">Unfortunately, your order Cannot Be Completed.
                            Please ensure that the billing address you provided is the same one where your debit/credit card is registered.
                            Alternatively, please try a different payment method. </p>
                        <button className="w-[40%] bg-[#5A6D57] py-3 text-[14px] text-white cursor-pointer">Pay Now</button>
                        <button className="text-sm text-gray-500 cursor-pointer" onClick={() => router.back("/payment")}>
                            ← Back to My Orders
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}