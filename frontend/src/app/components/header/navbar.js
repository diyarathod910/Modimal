"use client";
import { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

import { useRouter } from "next/navigation";


import SearchOverlay from "../navbar/searchOverlay";
import CartDrawer from "../checkoutCmp/cartDrawer";

export default function Navbar() {

    const router = useRouter();
    const [openCart, setOpenCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showNewIn, setShowNewIn] = useState(false);
    const [showPlus, setShowPlus] = useState(false);
    const [showSustain, setShowSustain] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [query, setQuery] = useState("");

    return (
        <>
            <header className="w-full flex flex-col items-center justify-center">
                <div className="w-full bg-[#5A6D57] flex items-center justify-center py-2">
                    <p className="text-white text-[12px] ">Enjoy Free Shipping On All Orders</p>
                </div>
                <nav className="w-[85%] flex items-center justify-between py-3">
                    <img src="/images/logo.png" width={200} height={200} alt="logo" onClick={() => router.back("/")} className="cursor-pointer"  ></img>
                    <div className="w-[45%] relative flex justify-between">
                        {/* COLLECTION (IMPORTANT WRAPPER) */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowMenu(true)}
                            onMouseLeave={() => setShowMenu(false)}
                        >
                            <p className="cursor-pointer">Collection</p>

                            {/* MEGA MENU */}
                            <div
                                className={`fixed left-0 top-26.75 w-full bg-white shadow-lg z-50
                transition-all duration-300 ease-in-out
                ${showMenu
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 -translate-y-5 invisible"
                                    }`}
                            >
                                <div className="max-w-7xl mx-auto px-20 py-10">

                                    <div className="grid grid-cols-5 gap-12">

                                        {/* Category */}
                                        <div >
                                            <h3 className="font-semibold mb-4">Category</h3>
                                            <ul className="space-y-3 text-gray-600">
                                                <li><Link href="/shopAll">Shop All</Link></li>
                                                <li>boluses & top</li>
                                                <li>pants</li>
                                                <li>Dresses & jumpsuits</li>
                                                <li>outwear & jackets </li>
                                                <li>pullovers</li>
                                                <li>tees</li>
                                                <li>shorts & skirts</li>
                                            </ul>
                                        </div>

                                        {/* Featured */}
                                        <div>
                                            <h3 className="font-semibold mb-4">Featured</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>New In</li>
                                                <li>modiweek</li>
                                                <li>plus size</li>
                                                <li>best seller</li>
                                            </ul>
                                        </div>

                                        {/* More */}
                                        <div>
                                            <h3 className="font-semibold mb-4">More</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>Bundles</li>
                                                <li>Occasion Wear</li>
                                                <li>matching set</li>
                                                <li>suiting</li>
                                            </ul>
                                        </div>

                                        {/* Images */}
                                        <div className="col-span-2 flex gap-6">
                                            <div>
                                                <img
                                                    src="/images/col-nav-blouse.png"
                                                    className="h-full  object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Blouses</p>
                                            </div>

                                            <div>
                                                <img
                                                    src="/images/col-nav-plus.png"
                                                    className="h-full object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Plus Size</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* new in menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowNewIn(true)}
                            onMouseLeave={() => setShowNewIn(false)}
                        >
                            <p className="cursor-pointer">New In</p>

                            {/* MEGA MENU */}
                            <div
                                className={`fixed left-0 top-26.75 w-full bg-white shadow-lg z-50
    transition-all duration-300 ease-in-out
    ${showNewIn
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 -translate-y-5 invisible"
                                    }`}
                            >
                                <div className="max-w-7xl mx-auto px-20 py-10">

                                    <div className="grid grid-cols-5 gap-12">

                                        {/* Category */}
                                        <div>
                                            <h3 className="font-semibold mb-4">Category</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>Shop All</li>
                                                <li>Tops & Blouses</li>
                                                <li>Tees</li>
                                                <li>Pants</li>
                                                <li>Jackets & Outerwear</li>
                                                <li>Pullovers</li>
                                                <li>Dresses & Jumpsuits</li>
                                                <li>Shorts & Skirts</li>
                                            </ul>
                                        </div>

                                        {/* Trending */}
                                        <div>
                                            <h3 className="font-semibold mb-4">Trending</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>Plus Size</li>
                                                <li>Fall Collection</li>
                                                <li>Modiweek</li>
                                            </ul>
                                        </div>

                                        {/* Images (MAIN PART 🔥) */}
                                        <div className="col-span-3 flex gap-6">

                                            <div>
                                                <img
                                                    src="/images/col-nav-fall.png"
                                                    className="h-72  object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Fall Collection</p>
                                            </div>

                                            <div>
                                                <img
                                                    src="/images/col-nav-blouse2.png"
                                                    className="h-72  object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Blouses</p>
                                            </div>

                                            <div>
                                                <img
                                                    src="/images/col-nav-plus.png"
                                                    className="h-72  object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Dresses</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <Link href={"/"} className="hover:cursor-pointer">Modiweek</Link>
                        {/* plus size menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                setShowMenu(false);
                                setShowNewIn(false);
                                setShowPlus(true);
                            }}
                            onMouseLeave={() => setShowPlus(false)}
                        >
                            <p className="cursor-pointer">Plus Size</p>

                            {/* MEGA MENU */}
                            <div
                                className={`fixed left-0 top-26.75 w-full bg-white shadow-lg z-50
    transition-all duration-300 ease-in-out
    ${showPlus
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 -translate-y-5 invisible"
                                    }`}
                            >
                                <div className="max-w-7xl mx-auto px-20 py-10">

                                    <div className="grid grid-cols-4 gap-12">

                                        {/* LEFT CATEGORY */}
                                        <div>
                                            <h3 className="font-semibold mb-4">Category</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                <li><Link href="/plusSize">Shop All</Link></li>
                                                <li>Top & Blouses</li>
                                                <li>Tees</li>
                                                <li>Pants</li>
                                                <li>Jackets & Outerwear</li>
                                                <li>Pullovers</li>
                                                <li>Dresses & Jumpsuits</li>
                                                <li>Shorts & Skirts</li>
                                            </ul>
                                        </div>

                                        {/* RIGHT IMAGES */}
                                        <div className="col-span-3 flex gap-8">

                                            <div>
                                                <img
                                                    src="/images/col-plus1.jpg"
                                                    className="h-72 object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Pants</p>
                                            </div>

                                            <div>
                                                <img
                                                    src="/images/col-plus2.png"
                                                    className="h-72 w-48 object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Dresses</p>
                                            </div>

                                            <div>
                                                <img
                                                    src="/images/col-plus3.png"
                                                    className="h-72 w-48 object-cover rounded-md"
                                                />
                                                <p className="mt-2 text-sm">Blouses</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* sustainbility menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => {
                                setShowMenu(false);
                                setShowNewIn(false);
                                setShowPlus(false);
                                setShowSustain(true);
                            }}
                            onMouseLeave={() => setShowSustain(false)}
                        >
                            <p className="cursor-pointer">Sustainability</p>

                            {/* MEGA MENU */}
                            <div
                                className={`fixed left-0 top-26.75 w-full bg-white shadow-lg z-50
    transition-all duration-300 ease-in-out
    ${showSustain
                                        ? "opacity-100 translate-y-0 visible"
                                        : "opacity-0 -translate-y-5 invisible"
                                    }`}
                            >
                                <div className="max-w-7xl mx-auto px-20 py-10">

                                    <div className="grid grid-cols-3 gap-12 items-center">

                                        {/* LEFT MENU */}
                                        <div>
                                            <h3 className="font-semibold mb-4">Sustainability</h3>
                                            <ul className="space-y-3 text-gray-600">
                                                <li> <Link href="/sustainability">Mission</Link> </li>
                                                <li>Processing</li>
                                                <li><Link href="/sustainability/material">Materials</Link></li>
                                                <li>Packaging</li>
                                                <li>Product Care</li>
                                                <li>Our Suppliers</li>
                                            </ul>
                                        </div>

                                        {/* RIGHT IMAGES */}
                                        <div className="col-span-2 flex gap-8">

                                            <div>
                                                <img
                                                    src="/images/col-sus1.jpg"
                                                    className="h-80 w-90 object-cover rounded-md"
                                                />
                                            </div>

                                            <div>
                                                <img
                                                    src="/images/col-sus2.jpg"
                                                    className="h-80 w-90 object-cover rounded-md"
                                                />
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[13%] flex justify-between ">
                        <IoSearch
                            className="size-5 hover:cursor-pointer"
                            onClick={() => setOpenSearch(true)}
                        />
                        <FiUser className="size-5 hover:cursor-pointer" onClick={() => router.push("/register")}></FiUser>
                        <IoHeartOutline className="size-5 hover:cursor-pointer" onClick={() => router.push("/wishlist")}></IoHeartOutline>
                        <MdOutlineShoppingBag className="size-5 hover:cursor-pointer" onClick={() => setOpenCart(true)} ></MdOutlineShoppingBag>
                        <CartDrawer
                            isOpen={openCart}
                            onClose={() => setOpenCart(false)}
                        />
                    </div>
                </nav>
            </header>


            <SearchOverlay
                isOpen={openSearch}
                onClose={() => setOpenSearch(false)}
                query={query}
                setQuery={setQuery}
            />
        </>
    );
}