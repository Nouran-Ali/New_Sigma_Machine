import React from "react";
import styles from "../../styles/Resources.module.css";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import { mediaCenter } from "@/lib/mediaCenter";
import Link from "next/link";

const MediaCenter = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Head>
                <title>Media Center | Sigma Machines</title>
                <link rel="icon" href="logo.png" />

                <meta
                    name="keywords"
                    content="CNC Machine, Machine Tools, Industrial Automation, Manufacturing"
                />
            </Head>

            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className="text-white text-5xl text-center pt-14">
                    {t("Media Center")}
                </h1>

                <p className="text-[#d6d6d6] text-xl text-center mt-5 max-w-3xl mx-auto leading-8">
                    {t(
                        "Watch machine demonstrations, tutorials, maintenance guides, customer success stories and the latest updates from Sigma Machines."
                    )}
                </p>
            </div>

            <div
                className="px-24 max-xl:px-10 py-10"
                dir={language === "en" ? "ltr" : "rtl"}
            >
                {/* Search + Filters */}

                <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mb-10">

                    <input
                        type="text"
                        placeholder={t("Search videos...")}
                        className="w-full lg:w-[420px] border border-gray-200 rounded-xl px-5 py-3 outline-none focus:border-[#D4AF37]"
                    />

                    {/* <div className="flex flex-wrap gap-3">

                        <button className="bg-[#D4AF37] text-white px-5 py-2 rounded-full text-sm">
                            {t("All")}
                        </button>

                        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-[#D4AF37] hover:text-white duration-300">
                            {t("Machine Demo")}
                        </button>

                        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-[#D4AF37] hover:text-white duration-300">
                            {t("Tutorial")}
                        </button>

                        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-[#D4AF37] hover:text-white duration-300">
                            {t("Maintenance")}
                        </button>

                        <button className="border border-gray-300 px-5 py-2 rounded-full text-sm hover:bg-[#D4AF37] hover:text-white duration-300">
                            {t("Customer Story")}
                        </button>

                    </div> */}

                </div>

                {/* Videos */}

                <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">

                    {mediaCenter.map((video) => (

                        <Link
                            href={`/media-center/${video.slug}`}
                            key={video.id}
                            className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl duration-300 border border-gray-100"
                        >

                            {/* Thumbnail */}

                            <div className="relative overflow-hidden">

                                <div className="aspect-video rounded-3xl overflow-hidden">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>

                            </div>

                            {/* Content */}

                            <div className="p-6">

                                <span className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold px-3 py-1 rounded-full">

                                    {language === "en"
                                        ? video.category
                                        : video.category_ar}

                                </span>

                                <h2 className="font-bold text-xl mt-4 line-clamp-2">

                                    {language === "en"
                                        ? video.title
                                        : video.title_ar}

                                </h2>

                                <p className="text-gray-600 mt-3 line-clamp-3">

                                    {language === "en"
                                        ? video.excerpt
                                        : video.excerpt_ar}

                                </p>

                                <div className="flex justify-between items-center mt-6">

                                    <span className="text-sm text-gray-400">
                                        {video.date}
                                    </span>

                                    <span className="text-[#D4AF37] font-semibold group-hover:translate-x-1 duration-300">
                                        {t("Watch Video")} →
                                    </span>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>
        </>
    );
};

export default MediaCenter;