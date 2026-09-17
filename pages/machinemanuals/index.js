import React from "react";
import styles from "../../styles/Resources.module.css";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import { machinemanuals } from "@/lib/machinemanuals";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "@/comps/Meta";

const Machinemanuals = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Meta
                title="Machine Manuals"
                description=""
            />

            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className="text-white text-5xl text-center pt-24">{t("Machine Manuals & Spare Parts")}</h1>
                <h1 className="text-[#bfbfbf] text-2xl text-center pt-5">{t("Resources")}</h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-24 max-xl:px-10 py-6" dir={language === "en" ? "ltr" : "rtl"}>

                {machinemanuals.slice(0, 5).map((blog) => (

                    <Link
                        href={`/machinemanuals/${blog.slug}`}
                        key={blog.id}
                        className="bg-[#101010] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg duration-300"
                    >

                        {/* <img
                            src={blog.image}
                            alt={language === "en" ? blog.title : blog.title_ar}
                            className="w-full h-64 object-cover"
                        /> */}

                        <div className="p-6">

                            <span className="text-[#D4AF37] text-sm">
                                {language === "en" ? blog.category : blog.category_ar}
                            </span>

                            <h2 className="font-bold text-xl mt-2 line-clamp-2">
                                {language === "en" ? blog.title : blog.title_ar}
                            </h2>

                            <p className="text-[#a2a2a3] mt-3">
                                {language === "en" ? blog.excerpt : blog.excerpt_ar}
                            </p>

                            <p className="text-gray-400 text-sm mt-3">
                                {language === "en" ? blog.date : blog.date_ar}
                            </p>

                        </div>

                    </Link>

                ))}

            </div>
        </>
    );
};

export default Machinemanuals;