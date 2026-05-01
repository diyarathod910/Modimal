import { useState } from "react";
import { AiOutlineTruck } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function ProductInfo({
    name,
    description,
    price,
    colors,
    sizes,
    addToCart,
    productId,
    image,
}) {
    console.log(productId);

    const router = useRouter();
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");




    return (
        <>
            <div className="flex flex-col gap-8">
                <p className="text-[32px] capitalize">{name}</p>
                <p className="text-gray-600 text-[18px]">
                    {description}
                </p>

                {/* Color */}
                <div className="flex gap-2">
                    {colors?.map((color, i) => (
                        <span
                            key={i}
                            onClick={() => setSelectedColor(color)}
                            className={`w-6 h-6 rounded-full border-2 cursor-pointer ${selectedColor === color ? "border-black" : "border-gray-300"
                                }`}
                            style={{ backgroundColor: color }}
                        ></span>
                    ))}
                </div>


                {/* Size */}
                <div className="flex justify-between text-sm mb-2">
                    <span>Size</span>
                    <span className="text-gray-400 cursor-pointer">
                        Size Guide
                    </span>
                </div>

                <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full border p-2 text-sm capitalize"
                >
                    <option value="">Select Size</option>

                    {sizes?.map((size, i) => (
                        <option key={i} value={size}>
                            {size}
                        </option>
                    ))}
                </select>

                {/* Button */}
                <button className="bg-green-700 text-white py-3 mt-2 cursor-pointer" onClick={() => {
                    if (!selectedSize || !selectedColor) {
                        alert("Please select size and color");
                        return;
                    }

                    addToCart({
                        _id: productId,
                        name,
                        price,
                        image,
                        size: selectedSize,
                        color: selectedColor
                    });


                    alert("cart added");

                    // router.push("/cart");
                   
                }} >
                    Add To Cart + ${price}
                </button>

                {/* Extra */}
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <div className="flex gap-3 items-center">
                        <AiOutlineTruck className="size-5"> </AiOutlineTruck>
                        <p> Easy Return</p>
                    </div>
                    <span>Add to Wish List</span>
                </div>

            </div>
        </>
    )
}