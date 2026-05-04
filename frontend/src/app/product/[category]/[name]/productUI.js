"use client"

import { Montserrat } from "next/font/google";

import Navbar from "@/app/components/header/navbar";
import Link from "next/link";
import Footer from "@/app/components/footer/footer";


import ProductImage from "@/app/components/productDetails/productImage";
import ProductInfo from "@/app/components/productDetails/productInfo";
import FabricInfo from "@/app/components/productDetails/fabricInfo";
import Accordion from "@/app/components/productDetails/accrodian";


import useCartLogic from "@/app/hooks/useCartLogic";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function ProductUI({ product }) {




    // const cartLogic = useCartLogic();
    const { addToCart } = useCartLogic();

    console.log(product);

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!product) return <div>Loading...</div>;
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
                                <Link href="" className="hover:text-[#748C70] capitalize" >{product.category}</Link>
                            </li>
                            /
                            <li>
                                <Link href="" className="hover:text-[#748C70] capitalize" >{product.name}</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full flex justify-center">
                    <div className="w-[85%] flex flex-col items-center">
                        <div className="w-full flex justify-between">
                            <div className="w-[49%] flex flex-col">
                                <ProductImage images={`${BASE_URL}${product.image}`}></ProductImage>
                            </div>
                            <div className="w-[49%] flex flex-col">
                                <ProductInfo productId={product._id}   // 🔥 important fix
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    colors={product.colors}
                                    sizes={product.sizes}
                                    image={`${BASE_URL}${product.image}`}
                                    addToCart={addToCart} ></ProductInfo>
                            </div>
                        </div>
                        <div className="w-full flex  justify-between mt-[5%]">
                            <div className="w-[49%] ">
                                <div className="w-[95%] ">

                                    {/* Fitting */}
                                    <Accordion title="Fitting">
                                        <p>Fit: Regular Fit</p>
                                        <p>Stretch: High Stretch</p>
                                        <p>Length: Midi Length</p>
                                        <p>Model: 5'9 wearing size S</p>
                                    </Accordion>

                                    {/* Fabric & Care (OPEN by default) */}
                                    <Accordion title="Fabric & Care" defaultOpen={true}>
                                        <p className="font-medium text-green-700 mb-2">Fabric :</p>
                                        <p>Cupro Luxe</p>
                                        <p>Made In Turkey, 100% Cupro, 38% Elastane, 100% Vegan Materials</p>

                                        <p className="font-medium text-green-700 mt-3 mb-2">Care :</p>
                                        <p>Cold Machine Wash, Line Dry</p>
                                        <p>Do Not Tumble Dry Or Dry Clean, Do Not Use Bleach Or Fabric Softener</p>
                                    </Accordion>

                                    {/* Product Detail */}
                                    <Accordion title="Product Detail">
                                        <p>Category: {product.category}</p>
                                        <p>Occasion: Casual / Party</p>

                                        <p>Pattern: Solid</p>
                                        <p>Made in Turkey</p>
                                    </Accordion>

                                    {/* Shipping & Return (OPEN) */}
                                    <Accordion title="Shipping And Return" defaultOpen={true}>
                                        <p className="font-medium text-green-700 mb-2">Shipping:</p>
                                        <p>Is Free On US, Canada Orders Are $175</p>

                                        <p className="font-medium text-green-700 mt-3 mb-2">Returns:</p>
                                        <p>
                                            Unwashed, Unworn Items Are Eligible For Returns Or Exchanges Within 30 Days Of Purchase.
                                            Final Sale Items Are Not Eligible For Returns Or Exchanges.
                                        </p>
                                    </Accordion>

                                </div>
                            </div>
                            <div className="w-[49%]">
                                <FabricInfo fabric={product.fabric} />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div >
        </>
    )
}