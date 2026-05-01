
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="w-full flex flex-col items-center justify-center mt-[5%] pt-[5%] pb-[3%] gap-6 bg-[#404040]">
                <div className="w-[85%] flex justify-between">
                    {/* first part */}
                    <div className="w-[40%] flex flex-col gap-5">
                        <p className="text-[20px] font-bold text-white">Join our club, get 15% off for your Birthday</p>
                        <form>
                            <div className="flex flex-col gap-3">
                                <input type="text" placeholder="Enter Your Email Address" className="text-[12px] border-2 border-[#D1D9CF] text-[#D1D9CF] p-5 "></input>
                                <div className="flex items-center gap-5">
                                    <input type="checkbox" className="size-4" ></input>
                                    <p className="text-[12px] font-semibold text-white w-[95%]">By Submittng your email, you agree to receive advertising emails from Modimal.</p>
                                </div>
                            </div>
                        </form>

                        <div className="pt-[7%] flex  gap-3">
                            <GrInstagram className="text-white size-5 hover:cursor-pointer"></GrInstagram>
                            <FaFacebook className="text-white size-5 hover:cursor-pointer"></FaFacebook>
                            <FaPinterest className="text-white size-5 hover:cursor-pointer"></FaPinterest>
                            <FaTiktok className="text-white size-5 hover:cursor-pointer"></FaTiktok>
                        </div>

                        <div className="pt-[3%] flex items-center gap-3">
                            <FaRegCopyright className="text-[#CBCBCB] size-5"></FaRegCopyright>
                            <p className="text-[12px] text-[#CBCBCB]">2023 modimal. All Rights Reserved.</p>
                        </div>

                    </div>
                    {/* second part */}
                    <div className="w-[15%] flex flex-col gap-3">
                        <h1 className="text-white text-[20px] font-bold">About Modimal</h1>
                        <Link href="/shopAll" className="text-white text-[18px]">Collection</Link>
                        <Link href="/sustainability" className="text-white text-[18px]"> Sustainability</Link>
                        <a className="text-white text-[18px]">Privacy Policy</a>
                        <a className="text-white text-[18px]">Support System</a>
                        <a className="text-white text-[18px]">Terms & Condition</a>
                        <a className="text-white text-[18px]">Copyright Notice</a>
                    </div>
                    {/* third part */}
                    <div className="w-[15%] flex flex-col gap-3">
                        <h1 className="text-white text-[20px] font-bold">Help & Support</h1>
                        <a className="text-white text-[18px]">Orders & Shipping</a>
                        <a className="text-white text-[18px]"> Returns & Refunds</a>
                        <Link href="/faqs" className="text-white text-[18px]">FAQs</Link>
                        <Link href="/contactus" className="text-white text-[18px]">Contact Us</Link>
                    </div>
                    {/* fourth part */}
                    <div className="w-[15%] flex flex-col gap-3">
                        <h1 className="text-white text-[20px] font-bold">Join Up</h1>
                        <a className="text-white text-[18px]">Modimal Club</a>
                        <a className="text-white text-[18px]"> Careers</a>
                        <a className="text-white text-[18px]">Visit Us</a>

                    </div>
                </div>

            </footer>
        </>
    )
}