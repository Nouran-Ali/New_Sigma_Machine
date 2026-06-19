import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { events } from "@/lib/events";
import { useTranslation } from "react-i18next";

export const getStaticPaths = async () => {
    const paths = events.map((a) => ({
        params: { slug: a.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const article = events.find((a) => a.slug === params?.slug);

    return {
        props: { article },
    };
};


export default function Events({ article }) {
    if (!article) return null;

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Head>
                <title>{language === "en" ? article.title : article.title_ar}</title>
                <meta name="description" content={language === "en" ? article.description : article.description_ar} />
                <meta name="keywords" content={language === "en" ? article.keywords : article.keywords_ar} />

                {/* Open Graph */}
                <meta property="og:title" content={language === "en" ? article.title : article.title_ar} />
                <meta property="og:description" content={language === "en" ? article.description : article.description_ar} />
                <meta property="og:image" content={article.image} />
                <meta property="og:type" content="article" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            headline: language === "en" ? article.title : article.title_ar,
                            image: article.image,
                            datePublished: article.date,
                            description: language === "en" ? article.description : article.description_ar,
                        }),
                    }}
                />
            </Head>

            <article className="prose mx-auto pb-10 px-24 max-lg:px-5" dir={language === "en" ? "ltr" : "rtl"}>
                <div
                    className="bg-white rounded-2xl overflow-hidden"
                >

                    <img
                        src={article.image}
                        alt={language === "en" ? article.title : article.title_ar}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-6">

                        <span className="text-[#D97706] text-sm">
                            {language === "en" ? article.category : article.category_ar}
                        </span>

                        <h2 className="font-bold text-xl mt-2 line-clamp-2">
                            {language === "en" ? article.title : article.title_ar}
                        </h2>
                        <p className="text-gray-400 text-sm mt-3">
                            {language === "en" ? article.date : article.date_ar}
                        </p>

                        <p className="text-gray-600 mt-3">
                            {language === "en" ? article.excerpt : article.excerpt_ar}
                        </p>
                        

                    </div>

                </div>

            </article>


        </>
    );
}