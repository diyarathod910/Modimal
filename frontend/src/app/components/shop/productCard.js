import Link from "next/link";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

export default function ProductCard({ item, toggleWishlist,
    isInWishlist }) {

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
    const slug = item.name.toLowerCase().replaceAll(" ", "-");
    const isLiked = isInWishlist(item._id);
    const handleWishlist = () => {
        console.log("Sending ID:", item._id); // ✅ correct
        toggleWishlist(item._id);
    };
    return (
        <>
            <Link href={`/product/${item.category}/${item.name}`}>
                <div className="group cursor-pointer">

                    {/* Image */}
                    <div className="relative">
                        <img
                            src={`${BASE_URL}${item.image}`}
                            className="w-full h-145 object-cover"
                        />

                        <div
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();      // ⛔ stop link navigation
                                e.stopPropagation();     // ⛔ stop bubbling
                                handleWishlist();
                            }}
                        >
                            {isLiked ? (
                                <IoHeart className="text-red-500 text-xl" />
                            ) : (
                                <IoHeartOutline className="text-xl" />
                            )}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="mt-3">
                        <h3 className="font-medium">{item.name}</h3>

                        {/* 👇 subCategory */}
                        <p className="text-gray-500 text-sm">{item.subCategory}</p>

                        <div className="flex justify-between items-center mt-2">

                            {/* Colors */}
                            <div className="flex gap-2">
                                {item.colors?.map((color, i) => (
                                    <span
                                        key={i}
                                        className="w-3 h-3 rounded-full"
                                        style={{ backgroundColor: color }}
                                    ></span>
                                ))}
                            </div>

                            <p className="font-semibold">${item.price}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}