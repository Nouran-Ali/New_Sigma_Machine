import React from "react";
import { useTranslation } from "react-i18next";
import { blogs } from "@/lib/blogs";
import Link from "next/link";

const Blog = () => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div>
            <h1 className="text-4xl text-center pt-20 pb-5">{t("Blogs")}</h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-24 max-xl:px-10 py-6" dir={language === "en" ? "ltr" : "rtl"}>

                {blogs.slice(0, 6).map((blog) => (

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
        </div>
    )
}

export default Blog
