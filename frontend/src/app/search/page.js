"use client";

import { useSearchParams } from "next/navigation";
import {useState } from "react";

import FilterSidebar from "../components/shop/filterSidebar";
import useWishlist from "../hooks/useWishlist";
import SearchGrid from "../components/navbar/searchGrid";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

   

    const { wishlist, toggleWishlist, isInWishlist } = useWishlist();

    const sizeOptions = ["s", "m", "l"];

    const [filters, setFilters] = useState({
        size: [],
        color: [],
        fabric: [],
        inStock: false,
        sort: ""
    });


    

    return (
        <div className="w-full px-20 py-10">

            {/* 🔹 Title */}
            <h1 className="text-2xl mb-6">
                Search results for "<span className="font-semibold">{query}</span>"
            </h1>

         

            {/* ✅ Product Grid */}
            <div className="flex justify-center items-center">
                <div className="w-[85%] flex  justify-between mt-[5%]" >
                    <div className="w-[25%]">
                        {/* <FilterSidebar></FilterSidebar> */}
                        <FilterSidebar filters={filters} setFilters={setFilters} />
                    </div>
                    <div className="w-[70%]">
                        {/* <ProductGrid sizeOptions={sizeOptions}></ProductGrid> */}
                        <SearchGrid sizeOptions={sizeOptions} filters={filters} wishlist={wishlist}
                            toggleWishlist={toggleWishlist}
                            isInWishlist={isInWishlist} />
                    </div>
                </div>
            </div>
        </div>
    );
}