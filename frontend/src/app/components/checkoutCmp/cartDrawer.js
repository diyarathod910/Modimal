"use client";


import { useRouter } from "next/navigation";
import useCartLogic from "@/app/hooks/useCartLogic";

export default function CartDrawer({ isOpen, onClose }) {
    const { cart, updateQty, removeItem, total } = useCartLogic();

    const router = useRouter();

    return (
        <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`absolute right-0 top-0 h-full w-100 bg-white p-5 transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                <div className="flex justify-between mb-4">
                    <h2 className="text-lg font-semibold">Your Cart</h2>
                    <button onClick={onClose}>✕</button>
                </div>


                {cart.length === 0 ? (

                    <div className="flex flex-col items-center justify-center h-full text-center gap-4">

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-lg font-semibold">
                            Your Shopping Bag Is Empty
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Discover Modimal <br />
                            And Add Products To Your Bag
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col gap-3 mt-4 w-full px-10">
                            <button className="bg-[#5A6D57] text-white py-2 cursor-pointer" onClick={() => router.push("/shopAll")}>
                                Collection
                            </button>

                            <button className="bg-[#5A6D57] text-white py-2 cursor-pointer" onClick={() => router.push("/shopAll")}>
                                New In
                            </button>

                            <button className="bg-[#5A6D57] text-white py-2 cursor-pointer" onClick={() => router.push("/shopAll")}>
                                Best Sellers
                            </button>
                        </div>

                    </div>

                ) : (

                    <div className="flex flex-col gap-4 overflow-y-auto h-[70%]">
                        {cart.map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <img
                                    src={item.productId.image}
                                    className="w-16 h-20 object-cover"
                                />

                                <div className="flex-1">
                                    <p>{item.productId.name}</p>
                                    <p className="text-sm text-gray-500">
                                        Size: {item.size} | Color: {item.color}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <button onClick={() => updateQty(item, "dec")}>-</button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => updateQty(item, "inc")}>+</button>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-end">
                                    <button onClick={() => removeItem(item)}>✕</button>
                                    <p>${item.productId.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                )}
                {cart.length > 0 && (
                    <div className="mt-4 border-t pt-4">
                        <p className="flex justify-between">
                            <span>Total</span>
                            <span>${total}</span>
                        </p>

                        <button className="w-full bg-green-700 text-white py-3 mt-3 cursor-pointer" onClick={() => router.push("/cart")}>
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}