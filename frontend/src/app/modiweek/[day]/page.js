
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";


import { IoHeartOutline, IoHeart } from "react-icons/io5";

import Footer from "@/app/components/footer/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { useRouter } from "next/navigation";

import Navbar from "@/app/components/header/navbar";


import Link from "next/link";


import useWishlist from "@/app/hooks/useWishlist";


import ProductInfo from "@/app/components/productDetails/productInfo";

import useCartLogic from "@/app/hooks/useCartLogic";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default function ModiweekPage() {

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const router = useRouter();
    const { day } = useParams(); // ✅ IMPORTANT

    const [products, setProducts] = useState([]);
    const [swiperProduct, setSwiperProduct] = useState([]);
    useEffect(() => {
        if (!day) return;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/day/${day.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
                console.log("API DATA:", data);
                setProducts(data.products || []);
            });

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSwiperProduct(data);
            });
    }, [day]);

    const week_fits = swiperProduct.filter((item) => item.tags?.includes("modiweek"));

    const product = products[0];


    const { toggleWishlist, isInWishlist } = useWishlist();



    const { addToCart } = useCartLogic();

    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    return (
        <>
            <div className={montserrat.className}>
                <Navbar></Navbar>
                <section className="w-full flex items-center justify-center">
                    <div className="w-[85%] flex p-5 items-center">
                        <ul className="flex gap-5 group-hover:cursor-pointer ">
                            <li>
                                <Link href="/" className="text-[18px] hover:text-[#748C70] " >Home</Link>
                            </li>
                            /
                            <li>
                                <Link href="" className="hover:text-[#748C70] capitalize" >Modiweek</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full flex justify-center">
                    <div className="w-[85%] flex flex-col items-center">
                        <div className="w-full flex justify-between">
                            <div className="w-[49%] flex flex-col">
                                {product && (
                                    <img src={`${BASE_URL}${item.image}`} className="w-full h-130" ></img>
                                )}


                            </div>
                            <div className="w-[49%] flex flex-col">
                                {product && (
                                    <ProductInfo
                                        productId={product._id}
                                        name={product.name}
                                        description={product.description}
                                        price={product.price}
                                        colors={product.colors}
                                        sizes={product.sizes}
                                        image={`${BASE_URL}${product.image}`}
                                        addToCart={addToCart}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full flex flex-col items-center justify-center pt-[5%] gap-6">
                    <div className="w-[85%] flex flex-col">
                        <p className="text-[32px] font-semibold ">Modiweek</p>
                    </div>
                    <div className="w-full flex felx-col">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={4}
                            spaceBetween={20}
                            loop={true}
                            autoplay={{ delay: 0, disableOnInteraction: false }}
                            speed={3000}

                        >
                            {week_fits.map((item, i) => (
                                <SwiperSlide key={i}>

                                    <Link href={`/modiweek/${days[i % 7]}`}>
                                        <div className="h-[90%]">
                                            {/* Image Card */}
                                            <div className="relative h-full">
                                                <img
                                                    src={`${BASE_URL}${item.image}`}
                                                    className="w-full h-full object-cover rounded-md"
                                                />

                                                {/* ❤️ Wishlist Icon */}
                                                <span
                                                    className="absolute top-2 right-2 text-xl z-10 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault(); // 🚨 stops redirect
                                                        toggleWishlist(item._id);
                                                    }}
                                                >
                                                    {isInWishlist(item._id) ? (
                                                        <IoHeart className="text-red-500" />
                                                    ) : (
                                                        <IoHeartOutline className="text-black" />
                                                    )}
                                                </span>
                                            </div>
                                            {/* Day text (LEFT aligned like your image) */}
                                            <p className="mt-5 text-sm text-gray-700 font-medium capitalize">
                                                {item.day}
                                            </p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </section>

                <Footer></Footer>
            </div>
        </>
    );
}