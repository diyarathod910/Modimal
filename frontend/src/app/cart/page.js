"use client";

import useCartLogic from "../hooks/useCartLogic";

import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat", // optional (for Tailwind)
});


export default function CartPage() {

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const router = useRouter();
    const { cart, updateQty, removeItem, total } = useCartLogic();

    const subtotal = total;
    const tax = subtotal * 0.08; // 8% tax
    const shipping = 0;
    const finalTotal = subtotal + tax + shipping;

    return (
        <>
            <div className={montserrat.className}>

                <div className="w-full min-h-screen bg-[#f5f5f5] flex justify-center py-10 ">
                    <div className="w-[85%]">
                        <div>
                            <img src="/images/logo.png" width={200} height={200} alt="logo" ></img>
                        </div>
                        {/* HEADER */}
                        <div className="flex justify-between items-center mb-6 mt-[5%]">
                            <div className="flex gap-8">
                                <button className="text-sm text-gray-400 hover:cursor-pointer" onClick={() => router.push("/")}>Back</button>
                                <h1 className="text-2xl font-semibold">Your Cart</h1>
                            </div>
                            <button className="text-sm text-gray-400">Continue Shopping</button>
                        </div>

                        {/* TABLE HEADER */}
                        <div className="grid grid-cols-5 text-sm text-gray-500 border-b pb-3">
                            <p className="col-span-2">Order Summary</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                        </div>

                        {/* ITEMS */}
                        {cart.map((item, i) => (
                            <div key={i} className="grid grid-cols-5 items-center py-6 border-b">

                                {/* PRODUCT */}
                                <div className="col-span-2 flex gap-4 items-start">
                                    <img
                                        src={`${BASE_URL}${item.productId.image}`}
                                        className="w-20 h-24 object-cover"
                                    />

                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-sm font-medium">
                                            {item.productId?.name}
                                        </h3>

                                        <p className="text-xs text-gray-400">
                                            Size: {item.size}
                                        </p>

                                        <p className="text-xs text-gray-400">
                                            Color: {item.color}
                                        </p>
                                    </div>
                                </div>

                                {/* REMOVE ICON */}
                                <div className="absolute ml-[38%] text-[20px] ">

                                    <button
                                        onClick={() => removeItem(item)}
                                        className="text-xl  cursor-pointer mt-2"
                                    >
                                        ×
                                    </button>
                                </div>

                                {/* PRICE */}
                                <p className="text-sm">
                                    ${item.productId?.price ?? 0}.00
                                </p>

                                {/* QUANTITY */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => updateQty(item, "dec")}
                                        className="bg-[#e5e7eb] px-2"
                                    >
                                        -
                                    </button>

                                    <span className="text-sm">{item.qty}</span>

                                    <button
                                        onClick={() => updateQty(item, "inc")}
                                        className="bg-[#e5e7eb] px-2"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* TOTAL */}
                                <p className="text-sm">
                                    ${(item.productId?.price ?? 0) * item.qty}.00
                                </p>
                            </div>
                        ))}

                        {/* SUMMARY */}
                        <div className="flex justify-end mt-10">
                            <div className="w-75 text-sm space-y-3">

                                <div className="flex justify-between">
                                    <span>Subtotal ({cart.length})</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${(total * 0.08).toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>

                                <div className="flex justify-between font-medium pt-3 border-t">
                                    <span>Total Orders:</span>
                                    <span>${(total * 1.08).toFixed(2)}</span>
                                </div>

                                <p className="text-xs text-gray-400 leading-5">
                                    The total amount you pay includes all applicable customs duties &
                                    taxes. We guarantee no additional charges on delivery
                                </p>

                                <button className="w-full bg-[#5A6D57] text-white py-3 mt-3 cursor-pointer" onClick={() => router.push("/checkout")}>
                                    Next
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}