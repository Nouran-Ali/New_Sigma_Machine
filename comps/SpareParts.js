import React from "react";
import Product from "./Product_comp";
import styles from "../styles/Product.module.css";
import Link from "next/link";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { spareParts } from "@/data/spareParts";
import { useTranslation } from "react-i18next";

const SpareParts = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div className="pt-14 pb-9 relative">
            <div className="px-24 max-xl:px-10">
                <div className="">
                    <div className="relative">
                        <div className={`bg-[#f3ec5e24] p-6 rounded-full absolute ${language === "en" ? "-left-3" : "-right-3"} -top-3`}></div>
                        <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
                            {t("OUR Spare Parts")}
                        </p>
                    </div>
                    <h1 className="text-[#1c1c1c] text-xl mt-4">
                        {t("Premium Spare Parts for CNC & Laser Machines")}
                    </h1>

                    <p className="text-gray-600 mt-4 leading-8 max-w-3xl">
                        {t("We provide high-quality original and compatible spare parts for CNC, fiber laser cutting, laser marking, and press brake machines. Our products are carefully selected to ensure maximum performance, precision, durability, and reduced machine downtime, helping your production run efficiently with reliable replacement components.")}
                    </p>
                </div>

                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 mt-12">
                    {spareParts.slice(0, 4).map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300"
                        >
                            <div className="h-32 overflow-hidden bg-gray-50">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-contain rounded-3xl p-3 group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="font-semibold text-lg">
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
                                    href={`/spare-parts/${item.id}`}
                                    className="w-full block text-center bg-[#1c1c1c] text-white py-3 rounded-xl hover:bg-[#D4AF37] transition"
                                >
                                    {t("Order")}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mx-auto flex justify-center mt-14">
                    <Link href="/" className={`${styles.btn_more} flex items-center`}>
                        {t("More")}
                        {
                            language === "en" ?
                                <RightOutlined className={`ml-5 ${styles.arrow}`} /> :
                                <LeftOutlined className={`mr-5 ${styles.arrow}`} />
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpareParts;
