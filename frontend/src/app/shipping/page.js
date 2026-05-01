"use client";

import useCartLogic from "../hooks/useCartLogic";
import CartSummary from "../components/checkoutCmp/cartSummary";

import Link from "next/link";

import { Montserrat } from "next/font/google";

import { useRouter } from "next/navigation";


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat", // optional (for Tailwind)
});


export default function Shipping() {
    const router = useRouter();
    const { cart, total, updateQty, removeItem } = useCartLogic();

    return (
        <>



            <div className={`${montserrat.className} flex w-full min-h-screen justify-between`}>

                {/* LEFT SIDE */}
                <div className="w-[55%] mx-25 my-8  bg-white flex justify-center flex-col">

                    {/* LOGO */}
                    <img src="/images/logo.png" width={200} height={200} alt="logo" ></img>
                    {/* STEPS */}
                    <div className="w-[80%] flex p-5 items-center">
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
                                <Link href="" className="hover:text-[#748C70] capitalize" >shipping</Link>
                            </li>/
                            <li>
                                <Link href="" className="hover:text-[#748C70] capitalize" >payment</Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="mb-6 mt-[3%]">
                        <div className="flex justify-between capitalize border-b-2 border-[#DFDFDF] py-3">
                            <p className="text-lg">contact</p>
                            <p className="text-sm text-[#748C70]">Change</p>
                        </div>
                        <div className="flex justify-between capitalize  py-3">
                            <p className="text-lg">Ship to</p>
                            <p className="text-sm text-[#748C70]">Change</p>
                        </div>


                    </div>

                    {/* SHIPPING */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-lg font-bold border-b-2 border-[#DFDFDF] py-3">Delivery Options</h1>
                        <div className="w-full text-sm text-gray-700 flex flex-col gap-5">

                            {/* EXPRESS */}
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <p className="font-bold text-[16px] text-[#868686]">Express Courier (Air)</p>
                                    <p className="text-gray-400 text-xs mt-1">3 to 4 Business Days</p>
                                </div>
                                <p className="font-medium">Free</p>
                            </div>

                            {/* EXPECTED DATE */}
                            <div className="mb-6 flex gap-5">
                                <p className="text-gray-500 mb-2">Expected Date:</p>

                                <div className="grid grid-cols-2 gap-y-2 gap-x-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="date" className="accent-black" />
                                        Monday, August 14
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="date" className="accent-black" />
                                        Wednesday, August 16
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="date" className="accent-black" />
                                        Tuesday, August 22
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="date" className="accent-black" />
                                        Friday, August 25
                                    </label>
                                </div>
                            </div>

                            {/* DIVIDER */}
                            <div className="border-t border-gray-200 "></div>

                            {/* GUARANTEED */}
                            <div className="mt-[2%] flex gap-5 w-full">
                                <p className="text-gray-500 mb-2">Guaranteed By:</p>

                                <div className="w-full">
                                    {/* OPTION 1 */}
                                    <div className="flex justify-between items-center mb-3 ">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="guaranteed" className="accent-black" />
                                            <span>
                                                Wednesday, August 11th By 8 PM

                                            </span>
                                        </label>
                                        <span className="font-medium">$24.00</span>
                                    </div>

                                    {/* OPTION 2 */}
                                    <div className="flex justify-between items-center">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="guaranteed" className="accent-black" />
                                            <span>
                                                Wednesday, August 11th By Noon
                                            </span>
                                        </label>
                                        <span className="font-medium">$24.00</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* FOOTER BUTTONS */}
                    <div className="flex justify-between items-center mt-[10%]  ">
                        <button className="text-sm text-gray-500 cursor-pointer" onClick={() => router.back("/shipping")}>
                            ← return to information
                        </button>

                        <button className="bg-[#5A6D57] text-white px-6 py-3 text-sm cursor-pointer" onClick={()=>router.push("/payment")}>
                            Continue To Payment
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-[40%] bg-[#F7F7F7] px-10 py-10 border-l">
                    <CartSummary
                        cart={cart}
                        total={total}
                        updateQty={updateQty}
                        removeItem={removeItem}
                    />
                </div>
            </div>
        </>
    );
}