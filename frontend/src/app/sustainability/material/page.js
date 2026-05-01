"use client"

import { Montserrat } from "next/font/google";

import Navbar from "@/app/components/header/navbar";
import Link from "next/link";
import Footer from "@/app/components/footer/footer";


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Material() {

    return (
        <>
            <div className={montserrat.className}>
                <Navbar></Navbar>

                <section className="w-full flex items-center justify-center">
                    <div className="w-[85%] flex p-5 items-center">
                        <ul className="flex gap-8 group-hover:cursor-pointer ">
                            <li>
                                <Link href="/" className="text-[18px] hover:text-[#748C70] " >Home</Link>
                            </li>
                            /
                            <li>
                                <Link href="" className="hover:text-[#748C70]" >Sustainability</Link>
                            </li>
                            /
                            <li>
                                <Link href="" className="hover:text-[#748C70]" >Materials</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="w-full flex items-center justify-center mt-[3%]">
                    <div className="w-[85%] flex flex-col gap-5">
                        <h1 className="text-[32px] capitalize font-semibold">Sustainably sourced materials</h1>
                        <p className="text-[20px] capitalize ">
                            At Modimal, we believe in investing in the now to design for the future. That’s why we are committed to sourcing quality materials that will have less impact on the environment.
                            So far in 2022, 92% of the base fabrics in our collection are more sustainably sourced. Our goal is  To use only 100% sustainably sourced materials by 2025.
                            There are five kinds of fabrics in our collections that are Organic and responsible sourced, and we highlight these so you can make considered choices when you shop.
                        </p>

                    </div>
                </section>
                <section className="w-full flex justify-center items-center pt-[3%]">
                    <div className="w-[85%] flex items-center">
                        <div className="w-[50%]">
                            <div className="relative w-70 h-100">

                                {/* BACK IMAGE (cotton / texture) */}
                                <img
                                    src="/images/material-1.jpg"
                                    className="w-full h-full object-cover"
                                />

                                {/* OVERLAY IMAGE (model) */}
                                <img
                                    src="/images/material-2.jpg"
                                    className="absolute top-0 left-40 w-full h-full object-cover opacity-90 mix-blend-multiply"
                                />

                            </div>
                        </div>
                        <div className="w-[80%] flex flex-col gap-5">
                            <h1 className="text-[24px] font-bold">Cotton</h1>
                            <p className="w-[90%] text-[18px] ">We source certified organic cotton, which is grown without the use of pesticides or synthetic fertilizers and requires less irrigation as it relies mainly on rainwater.
                                (1). Avoiding harmful pesticides preserves soil biodiversity and protects the health of surrounding communities.<br></br>
                                (2). Our organic cotton fabrics are made using organic cotton yarns that are certified by the Global Organic Textile Standard (GOTS)</p>
                        </div>
                    </div>
                </section>
                {/* 2 */}
                <section className="w-full flex justify-center items-center pt-[3%]">
                    <div className="w-[85%] flex items-center">

                        <div className="w-[80%] flex flex-col gap-5">
                            <h1 className="text-[24px] font-bold">Wool</h1>
                            <p className="w-[90%] text-[18px] ">Wool is a natural fiber with added performance attributes such as temperature regulation, durability, and natural water repellency. Considered a circular product by nature, wool can be recycled or biodegraded easily. Animal welfare is extremely important to us, and therefore we only source mulesing-free wool from producers that follow humane and eco-friendly processes aligned with our animal welfare guidelines.</p>
                        </div>
                        <div className="w-[50%]">
                            <div className="relative w-70 h-100">

                                {/* BACK IMAGE (cotton / texture) */}
                                <img
                                    src="/images/material-3.jpg"
                                    className="w-full h-full object-cover"
                                />

                                {/* OVERLAY IMAGE (model) */}
                                <img
                                    src="/images/material-4.jpg"
                                    className="absolute top-0 left-40 w-full h-full object-cover opacity-90 mix-blend-multiply"
                                />

                            </div>
                        </div>
                    </div>
                </section>
                {/* 3 */}
                <section className="w-full flex justify-center items-center pt-[3%]">
                    <div className="w-[85%] flex items-center">
                        <div className="w-[50%]">
                            <div className="relative w-70 h-100">

                                {/* BACK IMAGE (cotton / texture) */}
                                <img
                                    src="/images/material-5.jpg"
                                    className="w-full h-full object-cover"
                                />

                                {/* OVERLAY IMAGE (model) */}
                                <img
                                    src="/images/material-6.jpg"
                                    className="absolute top-0 left-40 w-full h-full object-cover opacity-90 mix-blend-multiply"
                                />

                            </div>
                        </div>
                        <div className="w-[80%] flex flex-col gap-5">
                            <h1 className="text-[24px] font-bold">Linen</h1>
                            <p className="w-[90%] text-[18px] ">Found throughout our collections, linen is a sustainable fiber made from the flax plant. Flax is naturally pest resistant that requires less pesticides, water and energy to produce compared to cotton and polyester. Flax aids in sequestering carbon into the soil, which removes carbon dioxide from the atmosphere and is beneficial for improving soil health.</p>
                        </div>
                    </div>
                </section>
                {/* 4 */}
                <section className="w-full flex justify-center items-center pt-[3%]">
                    <div className="w-[85%] flex items-center">

                        <div className="w-[80%] flex flex-col gap-5">
                            <h1 className="text-[24px] font-bold">Silk</h1>
                            <p className="w-[90%] text-[18px] ">Organic silk is a more responsible alternative to making conventional silk through traditional methods. The silkworms are fed mulberry tree leaves from organic agriculture that uses no pesticides or harmful chemicals and resulting in a lustrous fabric that is gentle on both you and environment. this responsibly sourced material epitomizes our dedication to creating exquisite clothing with a conscience.</p>
                        </div>
                        <div className="w-[50%]">
                            <div className="relative w-100 h-100 overflow-hidden">

                                {/* LEFT IMAGE */}
                                <img
                                    src="/images/material-7.jpg"
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />

                                {/* RIGHT IMAGE */}
                                <img
                                    src="/images/material-8.jpg"
                                    className="absolute top-0 right-0 w-[60%] h-full object-cover"
                                />

                                {/* SOFT BLEND OVERLAY */}
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>

                                {/* MIDDLE FADE EFFECT */}
                                <div className="absolute top-0 left-[40%] w-[20%] h-full bg-black opacity-20 backdrop-blur-sm"></div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* 5 */}
                <section className="w-full flex justify-center items-center pt-[3%]">
                    <div className="w-[85%] flex items-center">
                        <div className="w-[50%]">
                            <div className="relative w-100 h-100 overflow-hidden">

                                {/* BACK IMAGE (this was hidden before) */}
                                <img
                                    src="/images/material-9.jpg"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* FRONT IMAGE WITH MASK */}
                                <img
                                    src="/images/material-10.jpg"
                                    className="absolute inset-0 left-7 w-full h-full object-cover"
                                    style={{
                                        WebkitMaskImage: "linear-gradient(to right, transparent 30%, black 70%)",
                                        maskImage: "linear-gradient(to right, transparent 30%, black 55%)",
                                    }}
                                />

                            </div>
                        </div>
                        <div className="w-[80%] flex flex-col gap-5">
                            <h1 className="text-[24px] font-bold">Cashmere</h1>
                            <p className="w-[90%] text-[18px] ">We’re proud to source our cashmere through the Good Cashmere Standard by the Aid by Trade Foundation (AbTF). This independent standard works to source traceable, sustainably certified cashmere that cares for the wellbeing of cashmere goats, protects the environment and supports the herders that produce it.</p>
                        </div>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center mt-[3%]">
                    <div className="w-[85%] flex flex-col gap-10">
                        <p className="text-[20px] capitalize ">
                            we are continually exploring more sustainable alternatives that offer the same quality and performance. we will soon add new fabrics in to our collections which are recycling and repurposing. By giving a new life to leftover fabrics through recycling and repurposing, we can reduce our demand on the planet’s limited natural resources. Recycled fabrics are made using the waste from both the pre- and post-consumer stage of a product’s life.
                        </p>
                        <p className="text-[20px] capitalize ">
                            We track our material usage and progress annually as part of Textile Exchange’s Corporate Fibers and Materials Benchmark, view our latest report here.
                        </p>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        </>
    )
}