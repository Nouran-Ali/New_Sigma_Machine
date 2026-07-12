import React from "react";
import Product from "./Product_comp";
import styles from "../styles/Product.module.css";
import Link from "next/link";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { spareParts } from "@/data/spareParts";
import { useTranslation } from "react-i18next";
import { deliveries } from "@/lib/deliveries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Deliveries = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div className="pt-14 pb-9 relative">
            <div className="px-24 max-xl:px-10">
                <div className="">
                    <div className="relative">
                        <div className={`bg-[#f3ec5e24] p-6 rounded-full absolute ${language === "en" ? "-left-3" : "-right-3"} -top-3`}></div>
                        <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
                            {t("OUR Deliveries")}
                        </p>
                    </div>

                </div>

                {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-12">

                    {deliveries.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl duration-300"
                        >

                            <div className="grid grid-cols-2 gap-1 h-56 bg-gray-100">

                                {item.images.slice(0, 4).map((img, index) => (

                                    <div
                                        key={index}
                                        className="relative overflow-hidden"
                                    >

                                        <img
                                            src={img}
                                            className="w-full h-full object-cover hover:scale-110 duration-500"
                                        />

                                        {index === 3 && item.images.length > 4 && (

                                            <div className="absolute inset-0 bg-black/60 flex justify-center items-center text-white text-3xl font-bold">

                                                +{item.images.length - 4}

                                            </div>

                                        )}

                                    </div>

                                ))}

                            </div>

                            <div className="p-6">

                                <h3 className="text-xl font-bold">

                                    {item.machine}

                                </h3>

                                <p className="text-gray-500 mt-2">

                                    📍 {language === "en" ? item.location : item.location_ar}

                                </p>

                            </div>

                        </div>

                    ))}

                </div> */}

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mt-12"
                >
                    {deliveries.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl duration-300 h-full mb-8">

                                {/* Images */}

                                <div className={`grid gap-1 h-56 bg-gray-100 ${item.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                                    }`}>

                                    {item.images.slice(0, 4).map((img, index) => (
                                        <div
                                            key={index}
                                            className="relative overflow-hidden"
                                        >
                                            <img
                                                src={img}
                                                className="w-full h-full object-cover hover:scale-110 duration-500"
                                            />

                                            {index === 3 && item.images.length > 4 && (
                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-bold">
                                                    +{item.images.length - 4}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                </div>

                                {/* Info */}

                                <div className="p-6 h-32">

                                    <h3 className="text-xl font-bold line-clamp-2">
                                        {item.machine}
                                    </h3>

                                    <p className="text-gray-500 mt-2">
                                        📍 {language === "en"
                                            ? item.location
                                            : item.location_ar}
                                    </p>

                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Deliveries;
