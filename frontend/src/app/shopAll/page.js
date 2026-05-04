"use client"

import { Montserrat } from "next/font/google";
import Navbar from "../components/header/navbar";

import Link from "next/link";
import Footer from "../components/footer/footer";



import { useState } from "react";

import FilterSidebar from "../components/shop/filterSidebar";
import ProductGrid from "../components/shop/productGrid";

import useWishlist from "../hooks/useWishlist";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});


export default function ShopAll() {

    

    const sizeOptions = ["s", "m", "l"];

    const [filters, setFilters] = useState({
        size: [],
        color: [],
        fabric: [],
        inStock: false,
        sort: ""
    });

    const { wishlist, toggleWishlist, isInWishlist } = useWishlist();

    console.log(wishlist);



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
                                <Link href="" className="hover:text-[#748C70]" >Shop All</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="w-full flex justify-center items-center flex-col ">
                    <img src="/images/filter-frame.png" className="w-full"></img>
                    <div className="w-[85%] flex  justify-between mt-[5%]" >
                        <div className="w-[25%]">
                            {/* <FilterSidebar></FilterSidebar> */}
                            <FilterSidebar filters={filters} setFilters={setFilters} />
                        </div>
                        <div className="w-[70%]">
                            {/* <ProductGrid sizeOptions={sizeOptions}></ProductGrid> */}
                            <ProductGrid sizeOptions={sizeOptions} filters={filters} wishlist={wishlist}
                                toggleWishlist={toggleWishlist}
                                isInWishlist={isInWishlist} />
                        </div>
                    </div>
                </section>

                <Footer></Footer>
            </div>
        </>
    )
}