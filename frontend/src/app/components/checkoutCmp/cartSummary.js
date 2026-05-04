"use client";

export default function CartSummary({ cart, total, updateQty, removeItem }) {

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    return (
        <div className="w-full  p-5">
            <h2 className="text-[20px] font-bold mb-4 text-center">Your Cart</h2>

            {cart.map((item, i) => {
                if (!item.productId) return null;

                return (
                    <div key={i} className="flex gap-4 justify-between mb-5">
                        <img
                            src={`${BASE_URL}${item.productId.image}`}
                            className="w-25 h-35 object-cover"
                        />

                        <div className="flex flex-col w-[75%] gap-3">
                            <h3 className="text-[16px] font-bold">
                                {item.productId.name}
                            </h3>
                            <p className="text-[16px] text-gray-500">
                                Size: {item.size}
                            </p>
                            <p className="text-[16px] text-gray-500">
                                Color: {item.color}
                            </p>

                            {/* qty */}
                            <div className="flex items-center gap-2 mt-2 bg-[#D1D9CF] w-[25%] justify-between px-2">
                                <button onClick={() => updateQty(item, "dec")} className="cursor-pointer">-</button>
                                <span className="text-[20px]">{item.qty}</span>
                                <button onClick={() => updateQty(item, "inc")} className="cursor-pointer">+</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-end">
                            <button onClick={() => removeItem(item)}>✕</button>
                            <p className="mt-auto text-[#0C0C0C] font-bold">
                                ${(item.productId?.price ?? 0) * item.qty}.00
                            </p>
                        </div>
                    </div>
                );
            })}

            {/* totals */}
            <div className="mt-5 border-t pt-3 text-lg flex flex-col gap-3">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(total * 0.08).toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>

                <div className="flex justify-between  mt-2">
                    <span>Total</span>
                    <span>${(total * 1.08).toFixed(2)}</span>
                </div>
                <p className="text-[12px] font-semibold">The total amount you pay includes all applicable customs duties & taxes. We guarantee no additional charges on delivery</p>
            </div>
        </div>
    );
}