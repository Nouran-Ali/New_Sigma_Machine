"use client";
import React from "react";
import Product from "./Product_comp";
import styles from "../styles/Product.module.css";
import Link from "next/link";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { clients } from "@/data/clients";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import logoClient from "../public/11.png";

import "swiper/css";
import "swiper/css/navigation";

const OurClients = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div className="pt-14 pb-9 relative">
            <div className="px-24 max-xl:px-10">
                <div className="text-center">
                    <div className="relative">
                        <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
                            {t("OUR Clients")}
                        </p>
                    </div>
                    <h1 className="text-[#1c1c1c] text-xl mt-4">
                        {t("Success Stories with Our Clients")}
                    </h1>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    spaceBetween={25}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {clients.map((client) => (
                        <SwiperSlide key={client.id}>
                            <div className="group bg-white rounded-3xl border border-gray-200 p-7 h-[230px]
            transition-all duration-500 hover:-translate-y-2 hover:border-yellow-500">

                                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
                                    <img
                                        src={logoClient}
                                        alt={client.name}
                                        className="max-w-[60px] max-h-[60px] object-contain grayscale
                        group-hover:grayscale-0 transition"
                                    />
                                </div>

                                <h3 className="text-center mt-6 font-semibold text-lg">
                                    {client.name}
                                </h3>

                                <div className="mt-3 flex justify-center">
                                    <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                                        Trusted Client
                                    </span>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default OurClients;
