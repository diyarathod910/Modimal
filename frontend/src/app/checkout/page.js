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


export default function CheckoutPage() {
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
                    <div className="w-[85%] flex p-5 items-center">
                        <ul className="flex gap-5 group-hover:cursor-pointer ">
                            <li>
                                <Link href="/cart" className="text-[18px] hover:text-[#748C70] capitalize " >cart</Link>
                            </li>
                            /
                            <li>
                                <Link href="" className="hover:text-[#748C70] capitalize" >info</Link>
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
                    <div className="mb-6">
                        <div className="flex justify-between text-[18px ] mb-2">
                            <span>Contact</span>
                            <span className="text-[#0C0C0C] cursor-pointer">
                                Have an account? <span className="text-[#5A6D57]">Log in</span>
                            </span>
                        </div>

                        <input
                            placeholder="Email"
                            className="w-full border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black"
                        />

                        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <input type="checkbox" />
                            <span>Email Me With News And Offers</span>
                        </div>
                    </div>

                    {/* SHIPPING */}
                    <div className="flex flex-col gap-3">
                        <p className="text-[18px] capitalize">
                            shipping address
                        </p>

                        <input className="w-full border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="Country/region"></input>


                        <div className="flex justify-between">
                            <input className="w-[48%] border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="first name"></input>
                            <input className="w-[48%] border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="Last Name"></input>
                        </div>

                        <input className="w-full border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="Company(Optional)"></input>

                        <input className="w-full border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="Address"></input>

                        <input className="w-full border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="apartment,suite,etc.(optional) "></input>

                        <div className="flex justify-between">
                            <input className="w-[48%] border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="postal code"></input>
                            <input className="w-[48%] border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="city"></input>
                        </div>

                        <input className="w-full border border-[#606060] px-3 py-3 text-sm outline-none focus:border-black" placeholder="phone "></input>

                        <div className="flex items-center gap-2 mt-2 text-sm text-black">
                            <input type="checkbox" className="size-4" />
                            <span>save this information for next time</span>
                        </div>
                    </div>

                    {/* FOOTER BUTTONS */}
                    <div className="flex justify-between items-center mt-10  ">
                        <button className="text-sm text-gray-500 cursor-pointer" onClick={() => router.back("/cart")}>
                            ← Return To Cart
                        </button>

                        <button className="bg-[#5A6D57] text-white px-6 py-3 text-sm cursor-pointer" onClick={() => router.push("/shipping")}>
                            Continue To Shipping
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