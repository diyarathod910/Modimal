"use client"

import { Montserrat } from "next/font/google";


import Link from "next/link";
import Footer from "../components/footer/footer";
import {useState } from "react";

import Navbar from "../components/header/navbar";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Faqs() {
   

    const [activeIndex, setActiveIndex] = useState(null);
    const data = [
        {
            question: "How Do I Contact Your Customer Service?",
            answer:
                "Our modimal Customer Service Team is available Monday through Friday, 9 am - 5 pm ET, excluding holidays. You can reach us via email at hello@modimal.com (preferred and our fastest response), via chat using the icon in the right bottom cornern of our website, or via voicemail at +1(929) 460-3208. We will make sure to get back to you within 24 business hours."
        },
        {
            question: "When Will My Order Ship?",
            answer: "Orders are processed within 2-3 business days."
        },
        {
            question: "Can I Cancel Or Modify My Order?",
            answer: "Yes, before shipping you can modify your order."
        },
        {
            question: "What Are My Shipping Options?",
            answer: "We offer standard and express shipping."
        },
        {
            question: "What Type Of Payment Methods Do You Offer?",
            answer: "We accept credit cards, UPI, and PayPal."
        },
        {
            question: "Which size will fit me best?",
            answer: "We offer product and body measurements on each of our products pages, just click on “Size Guide” to find your best fit. Measuring guides are included."
        },
        {
            question: "How do I take care of my modimal pieces?",
            answer: "To take care of clothes and make them last longer, wash them less frequently in cold water, air dry instead of using a dryer, and follow care label instructions. Use gentle detergents, turn garments inside out before washing to reduce fading, and properly store items in cool, dry areas."
        },
        {
            question: "Where and how do you manufacture your products?",
            answer: "Products are manufactured by identifying specialized factories—often found through directories like ThomasNet or Alibaba—that possess the necessary machinery and quality standards, with options for domestic or overseas production. The process involves creating a tech pack (detailed design), prototyping, finding a factory using resources like Maker's Row or MFG, signing contracts (OEM/NDA), and conducting factory audits to ensure quality."
        },
        {
            question: "How do you find and evaluate your suppliers?",
            answer: "Finding and evaluating suppliers involves a structured process of identifying potential partners, screening them via RFQs, and evaluating them based on cost, quality, reliability, and financial stability. Effective methods include using weighted scorecards, conducting site visits/audits, and reviewing samples to ensure they align with operational needs."
        },
        {
            question: "How do your suppliers support their workers? ",
            answer: "Suppliers support their workers by implementing ethical audits, confidential interviews, and safety training to ensure fair treatment. They often enhance worker well-being through engagement systems, skill-building training, fair payment, and health/safety management, fostering safer, more productive environments through strong, respectful partnerships."
        },

    ];

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
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
                                <Link href="" className="hover:text-[#748C70]" >FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full flex items-center justify-center mt-[3%]">
                    <div className="w-[75%] flex flex-col gap-5">
                        <h1 className="text-[32px] capitalize font-semibold">FAQs</h1>

                        {data.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 py-5">

                                {/* QUESTION */}
                                <div
                                    onClick={() => toggle(index)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <h2 className={`font-semibold ${activeIndex === index ? "text-green-700" : "text-gray-800"
                                        }`}>
                                        {item.question}
                                    </h2>

                                    <span className="text-xl">
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>

                                {/* ANSWER */}
                                {activeIndex === index && (
                                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                        {item.answer}
                                    </p>
                                )}

                            </div>
                        ))}
                    </div>
                </section>

               <Footer></Footer>
            </div>
        </>
    )
}