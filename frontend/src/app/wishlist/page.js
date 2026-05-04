"use client"

import { Montserrat } from "next/font/google";

import Navbar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import { useEffect } from "react";



import { useRouter } from "next/navigation";



import useWishlist from "../hooks/useWishlist";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default function Wishlist() {


    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const { wishlist, setWishlist, fetchWishlist, toggleWishlist } = useWishlist();
    const handleRemove = async (id) => {
        // instant UI
        setWishlist(prev =>
            prev.filter(item => String(item._id) !== String(id))
        );

        // reuse existing function
        await toggleWishlist(id);
    };
    useEffect(() => {
        fetchWishlist();
    }, []);

    console.log("wishlites", wishlist);


    const router = useRouter();

    return (
        <>
            <div className={montserrat.className}>

                <Navbar></Navbar>

                <section className="w-full flex justify-center mt-[3%]">
                    <div className="w-[85%] flex flex-col  items-center">
                        <h3 className="text-[30px] text-black font-bold">My Wish List</h3>


                        <div className="flex justify-between w-full mt-[5%] ">
                            {wishlist.length === 0 ? (
                                <div className="w-full flex flex-col items-center justify-center py-20 gap-4">
                                    <p className="text-xl font-semibold">Your Wishlist is Empty</p>
                                    <p className="text-gray-500 text-sm">
                                        Add products you love to your wishlist ❤️
                                    </p>

                                    <button
                                        onClick={() => router.push("/shopAll")}
                                        className="bg-green-700 text-white px-6 py-2 mt-3"
                                    >
                                        Browse Products
                                    </button>
                                </div>) : (

                                <div className="flex  w-full flex-wrap gap-6">
                                    {wishlist.map((item) => (
                                        <div key={item._id} className="flex flex-col w-[31%] gap-2">

                                            <div className="relative">
                                                <img
                                                    src={`${BASE_URL}${item.image}`}
                                                    className="w-full h-120 object-cover"
                                                />

                                                <div
                                                    className="absolute top-2 right-2 cursor-pointer"
                                                    onClick={() =>
                                                        handleRemove(item._id || item._id)
                                                    }
                                                >
                                                    ❤️
                                                </div>
                                            </div>

                                            <p className="font-bold">
                                                {item.name}
                                            </p>

                                            <div className="flex justify-between">
                                                <p>{item.subCategory}</p>
                                                <p className="font-bold">
                                                    ${item.price}
                                                </p>
                                            </div>
                                            <div className="w-[20%] flex justify-between gap-3 hover:cursor-pointer ">
                                                <div className="flex gap-2">
                                                    {item.colors?.map((color, i) => (
                                                        <span
                                                            key={i}
                                                            className="w-5 h-5 rounded-full border-2 border-grey-100"
                                                            style={{ backgroundColor: color }}
                                                        ></span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                    ))}



                                </div>
                            )}
                        </div >
                    </div>
                </section >

                <Footer></Footer>

            </div >
        </>
    )
}