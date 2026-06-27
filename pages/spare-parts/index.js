import React from "react";
import styles from "../../styles/Resources.module.css";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import { spareParts } from "@/data/spareParts";
import Link from "next/link";

const Sparearts = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    const phoneNumber = "+966569745955";
    const message = "Hello, I need to order";
    const messageAr = " مرحبا انا احتاج طلب  ";

    return (
        <>
            <Head>
                <title>Spare Parts | Sigma Machines</title>
                <link rel="icon" href="logo.png" />

                <meta
                    name="keywords"
                    content="CNC Machine, Machine Tools, Cable Scanner , LV7 JCZ control card original , Raycus Source QB 30W , Raycus Source QB 50W , Raycus Source QS 30W , Red Point With Holder , 30ºPunch Size:130*26*835 , Die V16 Size:80*60*835 , Goosenack 60ºPunch Size:115*36*835mm , Hemming Die Spring L835"
                />
            </Head>

            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className="text-white text-5xl text-center pt-24">{t("OUR Spare Parts")}</h1>
                <h1 className="text-[#bfbfbf] text-2xl text-center pt-5">{t("Resources")}</h1>
            </div>

            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 px-24 max-xl:px-10 py-6" dir={language === "en" ? "ltr" : "rtl"}>
                {spareParts.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300"
                    >
                        <div className="h-32 overflow-hidden bg-gray-50">
                            <img
                                src={item.image}
                                alt={item.name}
                                onError={(e) => {
                                    e.target.src = "https://placehold.co";
                                }}
                                className="w-full h-full object-contain rounded-3xl p-3 group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-semibold text-base">
                                    {language === "en" ? item.name : item.name_ar}
                                </h3>

                                <span className="text-xs bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full">
                                    {item.category}
                                </span>
                            </div>

                            <p className="text-gray-500 text-sm mb-4">
                                {t("Part No:")} {item.code}
                            </p>

                            <p className="text-gray-600 text-sm leading-6 mb-5">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-3">
                                {item.sizes.map((size) => (
                                    <span
                                        key={size}
                                        className="px-3 py-1 rounded-full bg-gray-100 text-xs"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>

                            <Link
                                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                                    `${language === "en" ? message : messageAr} ${language === "en" ? item.name : item.name_ar}`
                                )}`}
                                target="_blank"
                                className="w-full block text-center bg-[#1c1c1c] text-white py-3 rounded-xl hover:bg-[#D4AF37] transition"
                            >
                                {t("Order")}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sparearts;