import React from "react";
import styles from "../../styles/Resources.module.css";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import { caseStudies } from "@/lib/caseStudies";
import Link from "next/link";

const Blog = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Head>
                {/* <title>Sigma Machines / {blog.title}</title> */}
                <title>Case Studies | Sigma Machines</title>
                <link rel="icon" href="logo.png" />

                <meta
                    name="keywords"
                    content="CNC Machine, Machine Tools, Industrial Automation, Manufacturing"
                />
            </Head>

            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className="text-white text-5xl text-center pt-24">{t("Case Studies")}</h1>
                <h1 className="text-[#bfbfbf] text-2xl text-center pt-5">{t("Resources")}</h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-24 max-xl:px-10 py-6" dir={language === "en" ? "ltr" : "rtl"}>

                {caseStudies.map((item) => (

                    <Link
                        key={item.id}
                        href={`/case-studies/${item.slug}`}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                    >

                        <img
                            src={item.image}
                            alt={language === "en" ? item.title : item.title_ar}
                            className="w-full h-60 object-cover"
                        />

                        <div className="p-6">

                            <span className="text-sm text-[#D97706]">
                                {language === "en" ? item.category : item.category_ar}
                            </span>

                            <h2 className="font-bold text-xl mt-2">
                                {language === "en" ? item.title : item.title_ar}
                            </h2>

                            <p className="text-gray-600 mt-3">
                                {language === "en" ? item.excerpt : item.excerpt_ar}
                            </p>

                             <p className="text-gray-400 text-sm mt-3">
                                {language === "en" ? item.date : item.date_ar}
                            </p>

                        </div>

                    </Link>

                ))}

            </div>
        </>
    );
};

export default Blog;