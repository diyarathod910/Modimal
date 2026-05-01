"use client";

import { Montserrat } from "next/font/google";



import Link from "next/link";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function Payment() {
    const input =
        "w-full border px-3 py-2 text-sm  text-[#606060] outline-none border-black ";

    return (
        <div className={`${montserrat.className} w-full min-h-screen flex justify-center `}>

            {/* MAIN CARD */}
            <div className="w-[85%] bg-white p-10 mb-10 flex flex-col gap-5">

                {/* LOGO */}
                <img src="/images/logo.png" width={200} height={200} alt="logo" ></img>
                {/* STEPS */}
                <div className="w-full flex  items-center">
                    <ul className="flex gap-5 group-hover:cursor-pointer ">
                        <li>
                            <Link href="/cart" className="text-[18px] hover:text-[#748C70] capitalize " >cart</Link>
                        </li>
                        /
                        <li>
                            <Link href="/checkout" className="hover:text-[#748C70] capitalize" >info</Link>
                        </li>
                        /
                        <li>
                            <Link href="/shipping" className="hover:text-[#748C70] capitalize" >shipping</Link>
                        </li>/
                        <li>
                            <Link href="" className="hover:text-[#748C70] capitalize" >payment</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-10 justify-between ">

                    {/* LEFT SIDE - BILLING */}
                    <div className="w-[40%] text-black">
                        <h2 className="font-bold  text-[16px] mb-4">Billing Address</h2>

                        {/* CHECKBOXES */}
                        <div className="space-y-4 mb-4 text-md">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-black" defaultChecked />
                                Default (Same As Billing Address)
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-black" />
                                Add An Alternative Delivery Address
                            </label>
                        </div>

                        {/* INPUTS */}
                        <div className="space-y-3">
                            <input placeholder="Name" className={input} />
                            <input placeholder="Email" className={input} />
                            <input placeholder="Country" className={input} />
                            <input placeholder="Address Line 1" className={input} />
                            <input placeholder="Address Line 2" className={input} />
                            <input placeholder="City / Suburb" className={input} />
                            <input placeholder="Zip / Postcode" className={input} />
                            <input placeholder="Phone" className={input} />
                        </div>
                    </div>

                    {/* RIGHT SIDE - PAYMENT */}
                    <div className="w-[50%]">
                        <h2 className="font-black text-[16px] mb-4">Payment</h2>

                        <p className="text-sm mb-4 text-black">
                            Please Choose Your Payment Method
                        </p>

                        {/* PAYMENT ICONS */}
                        <div className="flex gap-6 items-center mb-6">
                            <img src="/images/amex.png" className="h-10" />
                            <img src="/images/visa.png" className="h-10" />
                            <img src="/images/mastercard.png" className="h-10" />
                            <img src="/images/paypal.png" className="h-10" />
                        </div>

                        {/* CARD NUMBER */}
                        <div className="mb-4 flex w-full">
                            <p className="text-sm mb-1">Card Number*</p>
                            <input className={input} />
                        </div>

                        {/* EXPIRY */}
                        <div className="mb-4 flex gap-2 w-full">
                            <p className="text-sm mb-1">Expiry Date*</p>
                            <div className="flex gap-3 w-full">
                                <input placeholder="Month" className={`${input} w-1/3`} />
                                <input placeholder="Year" className={`${input} w-1/3`} />
                            </div>
                        </div>

                        {/* CVV */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="w-1/3">
                                <p className="text-sm mb-1">Security Code*</p>
                                <input className={input} />
                            </div>

                            <span className="text-xs text-gray-400 mt-5 cursor-pointer">
                                ⓘ What is this?
                            </span>
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-[#5A6D57] text-white py-3 text-sm">
                            Pay And Place Order
                        </button>

                        {/* TERMS */}
                        <p className="text-[11px] text-gray-400 mt-4 leading-5">
                            By Clicking On ‘Pay And Place Order’, You Agree (i) To Make Your Purchase From Global-E As Merchant Of Record For This Transaction, Subject To Global-E’s Terms Of Sale; (ii) That Your Information Will Be Handled By Global-E In Accordance With The Global-E Privacy Policy; And (iii) That Global-E Will Share Your Information (Excluding The Payment Details) With Modimal.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}