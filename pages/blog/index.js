import React, { useEffect } from "react";
import styles from "../../styles/Resources.module.css";
import { useState } from "react";
import { Radio, Space, Tabs } from "antd";
import Head from 'next/head';
import { useTranslation } from "react-i18next";
import { blogs } from "@/lib/blogs";
import { useRouter } from "next/router";
import Link from "next/link";

const Blog = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    // const router = useRouter();
    // const { slug } = router.query;

    // const blog = blogs.find((item) => item.slug === slug);

    return (
        <>
            <Head>
                {/* <title>Sigma Machines / {blog.title}</title> */}
                <title>Blogs | Sigma Machines</title>
                <link rel="icon" href="logo.png" />

                <meta
                    name="keywords"
                    content="CNC Machine, Machine Tools, Industrial Automation, Manufacturing"
                />
            </Head>

            <div className={`${styles.bg_resources} mobile_d_none`}>
                <h1 className="text-white text-5xl text-center pt-24">{t("Blogs")}</h1>
                <h1 className="text-[#bfbfbf] text-2xl text-center pt-5">{t("Resources")}</h1>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-24 max-xl:px-10 py-6" dir={language === "en" ? "ltr" : "rtl"}>

                {blogs.map((blog) => (

                    <Link
                        href={`/blog/${blog.slug}`}
                        key={blog.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg duration-300"
                    >

                        <img
                            src={blog.image}
                            alt={language === "en" ? blog.title : blog.title_ar}
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">

                            <span className="text-[#D97706] text-sm">
                                {language === "en" ? blog.category : blog.category_ar}
                            </span>

                            <h2 className="font-bold text-xl mt-2 line-clamp-2">
                                {language === "en" ? blog.title : blog.title_ar}
                            </h2>

                            <p className="text-gray-600 mt-3">
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

export default Blog;