"use client"
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Footer from "./components/footer/footer";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import axios from "axios";
import Link from "next/link";


import useWishlist from "./hooks/useWishlist";



import Navbar from "./components/header/navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function Home() {
  const { toggleWishlist, isInWishlist } = useWishlist();



  const [products, setProducts] = useState([]);

  const [user, setUser] = useState([]);

  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];



  useEffect(() => {
    // fetch("http://localhost:8080/products")
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
    const id = localStorage.getItem("userId");

    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/ user/${id}`)
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const value = localStorage.getItem("showVerify");

    if (value) {
      setShowModal(true);
      localStorage.removeItem("showVerify");
    }


  }, []);

  const best_seller = products.filter((item) => item.isBestSeller === true);
  const week_fits = products.filter((item) => item.tags?.includes("modiweek"));

  console.log(week_fits);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={montserrat.className}>
      <Navbar></Navbar>

      {showModal && <VerifyModal onClose={() => setShowModal(false)} />}


      <div className="w-full flex relative">
        <Image src="/images/hero-img.png" width={700} height={300} alt="hero" className="w-full" priority ></Image>
        <div className="w-[25%] flex flex-col gap-5 absolute top-100 left-30 -translate-y-1/2 text-black">
          <p className="text-[34px] font-normal ">Elegance in simplicity, Earth’s harmony</p>
          <button className="w-[60%] bg-white text-[14px] py-5"> New In</button>
        </div>
      </div>

      <section className="w-full flex flex-col items-center justify-center pt-[5%] gap-6">
        <div className="w-[85%] flex justify-between">
          <p className="text-[32px] font-semibold ">Best Sellers</p>
          <button>See all</button>
        </div>
        <div className="w-[85%] flex justify-between">

          {best_seller.slice(0, 3).map((item) => (
            <div className="w-[30%] flex justify-center" key={item._id}>
              <div className="flex flex-col gap-3" >
                <div className="overflow-hidden w-full h-Dfull cursor-pointer ">
                  <div className="relative h-full transition-transform duration-500 hover:scale-105">
                    <img
                      src={item.image}
                      className="w-full h-150 object-cover rounded-md"
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
                </div>
                <h3 className="text-[16px] font-bold ">{item.name}</h3>
                <div className="w-full flex justify-between">
                  <p className="text-[16px] font-regular ">{item.category}</p>
                  <p className="text-[16px] font-bold">{item.price}</p>
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
            </div>
          ))}

        </div>
      </section>

      <section className="w-full flex flex-col items-center justify-center pt-[5%] gap-6">
        <div className="w-[85%] flex flex-col gap-5">
          <p className="text-[32px] font-semibold ">Collection</p>
          <div className="w-full flex justify-between ">
            {/* img upper */}
            <div className="flex w-[49%] flex-col justify-between gap-13 ">
              <div className="w-full transition-transform duration-500 hover:scale-105">
                <img src="/images/collection-blouse.png" className="w-full h-135 " ></img>
                <div className="w-full mt-[-15%] flex  justify-end">
                  <p className="bg-white text-[16px] font-medium w-[35%] p-3 text-center mr-[5%] hover:cursor-pointer">Blouses</p>
                </div>
              </div>
              <div className="w-full pt-[5%] transition-transform duration-500 hover:scale-105">
                <img src="/images/collection-dress.png" className="w-full h-full " ></img>
                <div className="w-full mt-[-15%] flex  justify-end">
                  <p className="bg-white text-[16px] font-medium w-[35%] p-3 text-center mr-[5%] hover:cursor-pointer">Dresses</p>
                </div>
              </div>
            </div>

            {/* img lower */}
            <div className="flex w-[49%] flex-col  gap-10 ">
              <div className="w-full transition-transform duration-500 hover:scale-105">
                <img src="/images/collection-pants.png" className="w-full h-full " ></img>
                <div className="w-full mt-[-15%] flex  justify-start">
                  <p className="bg-white text-[16px] font-medium w-[35%] p-3 text-center ml-[5%] hover:cursor-pointer">Pants</p>
                </div>
              </div>
              <div className="w-full transition-transform duration-500 hover:scale-105">
                <img src="/images/collection-outware.jpg" className="w-full h-134 " ></img>
                <div className="w-full mt-[-15%] flex  justify-end">
                  <p className="bg-white text-[16px] font-medium w-[35%] p-3 text-center mr-[5%] hover:cursor-pointer">Outwear</p>
                </div>
              </div>
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

                <Link href={`/ modiweek / ${days[i % 7]}`}>
                  <div className="h-[90%]">
                    {/* Image Card */}
                    <div className="relative h-full">
                      <img
                        src={item.image}
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

      <section className="w-full mt-[5%]">
        <img src="./images/Sustainability.png" className="w-full h-full"></img>
      </section>

      <section className="w-full flex flex-col items-center justify-center pt-[5%] gap-6">
        <div className="w-[85%] flex flex-col gap-5">
          <p className="text-[32px] font-semibold ">Follow us @modimal</p>

          <div className="w-full flex ">
            <div className="w-[50%]">
              <img src="./images/follow-1.jpg" className="w-full"></img>
            </div>
            <div className="w-[25%] flex flex-col">
              <img src="./images/follow-2.jpg" className="h-110"></img>
              <img src="./images/follow-4.jpg" className="h-102"></img>
            </div>
            <div className="w-[25%] flex flex-col">
              <img src="./images/follow-3.jpg" className="h-110"></img>
              <img src="./images/follow-5.jpg" className="h-102"></img>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </div >
  );
}
function VerifyModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-125 rounded-md p-8 relative shadow-lg">

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center mb-4">
          Verify Your Email Address
        </h2>

        <p className="text-gray-600 text-center leading-7">
          We’ve sent an email to your registered address.
          Please click the link in the email to verify your account.
        </p>

      </div>
    </div>
  );
}