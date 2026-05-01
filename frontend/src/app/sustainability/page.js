"use client"
import Navbar from "../components/header/navbar";
import { Montserrat } from "next/font/google";


import Link from "next/link";
import Footer from "../components/footer/footer";



const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Sustainability() {

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
                                <Link href="" className="hover:text-[#748C70]" >Mission</Link>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="w-full">
                    <img src="/images/big-pic-sus.png" className="w-full"></img>
                </section>

                <section className="w-full flex justify-center mt-[3%] gap-8">
                    <div className="w-[85%] flex flex-col gap-5">
                        <h1 className="text-[32px] capitalize font-semibold">sustainability at modimal</h1>
                        <p className="text-[20px] capitalize ">At Modimal, sustainability is at the heart of everything we do. Our brand identity,
                            characterized by its simplicity and elegance, is a reflection of our commitment to a more sustainable future.</p>

                        <div className="w-full flex  flex-col gap-8 mt-[3%]">
                            <p className="text-[24px] font-bold ">Our Mission, The Modimal six:</p>
                            <div className="flex justify-between">
                                <div className="w-[40%] flex flex-col gap-7">
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-[20px] font-bold">Minimalism</h5>
                                        <p className="text-[18px]  ">we believe less is more. Our thoughtfully design pieces embrace minimalism ensuring that garment becomes a versatile and timeless addition to your wardrobe. by choosing quality over quantity, we encourage conscious consumption. </p>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-[20px] font-bold">Ethical</h5>
                                        <p className="text-[18px] w-[90%] capitalize"> Every stitch tells a story. Our garments are meticulously crafted by skilled artisans who share our values of ethical and fair labor practices. This dedication to craftsmanship Dnot only ensures exceptional quality but also supports a network of talented individuals.</p>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-[20px] font-bold">Eco - Freindly Materials</h5>
                                        <p className="text-[18px] w-[90%] capitalize"> We are dedicated to reducing our environmental impact. Our clothing is made using sustainable materials, carefully sourced to minimize harm to the planet. From organic fabrics to innovative recycled materials, we aim to leave a lighter footprint. </p>
                                    </div>
                                </div>
                                <div className="w-[42%] flex flex-col gap-7">
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-[20px] font-bold">Circular</h5>
                                        <p className="text-[18px] w-[90%] capitalize"> Embracing the circular economy, we design with longevity in mind. Our pieces are intended to be treasured for years, encouraging a shift away from disposable fashion. When you invest in our clothing, you're investing in a more sustainable future.</p>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-[20px] font-bold">Transparency</h5>
                                        <p className="text-[18px] w-[90%] capitalize"> We value openness and transparency. We're on a journey to continuously improve our practices, and we're committed to sharing our progress with you. From sourcing to production, we want you to know the story behind each piece you wear. we are updating all  information very six months.</p>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h5 className="text-[20px] font-bold">Community And Empowerment</h5>
                                        <p className="text-[18px] w-[90%] capitalize">  Our brand is a part of a community that shares a vision for a better world. Through collaborations and initiatives, we aim to inspire and empower individuals to make conscious choices and contribute to positive change.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-[20px]">Guided by our core missions, we intertwine sustainability into every thread of our brand, from thoughtfully sourced materials and innovative manufacturing process to nurturing product longevity and embracing eco-friendly packaging – all harmonizing to create a more meaningful and responsible approach to fashion.</p>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center mt-[5%]">
                    <div className="w-[85%] flex flex-col">
                        {/* upper */}
                        <div className="flex gap-3" >
                            {/* 1 */}
                            <div className="flex flex-col items-center justify-center w-[49%] gap-3 overflow-hidden">
                                <img src="/images/sus-1.jpg" className="h-125 w-full transition-transform duration-500 hover:scale-105"></img>
                                <button className="bg-[#5A6D57] w-full p-3 text-white">Processing</button>
                            </div>
                            {/* 2 */}
                            <div className="flex flex-col items-center w-[50%] gap-3 overflow-hidden">
                                <img src="/images/sus-2.jpg" className="h-200 w-full transition-transform duration-500 hover:scale-105"></img>
                                <button className="bg-[#5A6D57] w-full p-3 text-white">Materials</button>
                            </div>
                        </div>
                        {/* lower */}
                        <div className="flex justify-between">
                            {/* 3 */}
                            <div className="flex flex-col items-center w-[49%] gap-3 overflow-hidden">
                                <img src="/images/sus-3.jpg" className="w-full h-200  transition-transform duration-500 hover:scale-105"></img>
                                <button className="bg-[#5A6D57] w-full p-3 text-white">Packaging </button>
                            </div>
                            {/* 4 */}
                            <div className="flex flex-col items-center w-[50%] gap-3 justify-center overflow-hidden  ">
                                <img src="/images/sus-4.jpg" className="h-125 w-full transition-transform duration-500 hover:scale-105 "></img>
                                <button className="bg-[#5A6D57] w-full p-3 text-white">Product Caring</button>
                            </div>
                        </div>
                    </div >

                </section >

                <section className="w-full flex justify-center mt-[3%]">
                    <div className="w-[85%] flex justify-center items-center">
                        <p className="text-[20px]">"With every step, our quest for sustainability is fortified by our trusted suppliers, united in our shared dedication to ethical craftsmanship and a more conscious future."</p>
                    </div>
                </section>

                <section className="w-full flex justify-center mt-[3%]">
                    <div className="w-[85%] flex flex-col  gap-6 ">
                        <h1 className="text-[24px] font-bold">People Beyond Us</h1>
                        {/* grid upper */}
                        <div className="w-full flex justify-between ">
                            <img src="/images/sus-ppl-1.jpg" className="w-[24%] h-70"></img>
                            <img src="/images/sus-ppl-2.jpg" className="w-[24%] h-70"></img>
                            <img src="/images/sus-ppl-3.jpg" className="w-[48%] h-70"></img>

                        </div>
                        {/* grid lower */}
                        <div className="w-full flex justify-between">
                            <img src="/images/sus-ppl-4.jpg" className="w-[33%] h-70"></img>
                            <img src="/images/sus-ppl-5.jpg" className="w-[19%] h-70"></img>
                            <img src="/images/sus-ppl-6.jpg" className="w-[18%] h-70"></img>
                            <img src="/images/sus-ppl-7.png" className="w-[24%] h-70"></img>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-[50%] bg-[#5A6D57] py-2 text-white">Our Suppliers</button>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center pt-[3%]">
                    <div className="w-[85%] flex ">
                        <p className="text-[20px]">
                            With Modimal, you're not just wearing fashion – you're making a statement. A statement that elegance and sustainability can coexist, shaping a more responsible and beautiful future for us all.</p>
                    </div>
                </section>

                <Footer></Footer>
            </div >
        </>
    )
}