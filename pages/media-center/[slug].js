import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { mediaCenter } from "@/lib/mediaCenter";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const getStaticPaths = async () => {
    const paths = mediaCenter.map((a) => ({
        params: { slug: a.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const article = mediaCenter.find((a) => a.slug === params?.slug);

    if (!article) return null;

    return {
        props: { article },
    };
};


export default function Article({ article }) {
    if (!article) return null;

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <>
            <Head>
                <title>{language === "en" ? article.title : article.title_ar}</title>
                <meta name="description" content={language === "en" ? article.seo.description : article.seo.description_ar} />
                <meta name="keywords" content={language === "en" ? article.seo.keywords : article.seo.keywords_ar} />

                {/* Open Graph */}
                <meta property="og:title" content={language === "en" ? article.title : article.title_ar} />
                <meta property="og:description" content={language === "en" ? article.seo.description : article.seo.description_ar} />
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

                    <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${article.youtubeId}`}
                            title={language === "en" ? article.title : article.title_ar}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">

                        <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-sm">
                            {language === "en"
                                ? article.category
                                : article.category_ar}
                        </span>

                        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                            ⏱ {article.duration}
                        </span>

                        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                            📅 {language === "en" ? article.date : article.date_ar}
                        </span>

                    </div>


                    <div className="p-6">

                        <span className="text-[#D97706] text-sm">
                            {language === "en" ? article.category : article.category_ar}
                        </span>

                        <h2 className="font-bold text-xl mt-2 line-clamp-2">
                            {language === "en" ? article.title : article.title_ar}
                        </h2>

                        <p className="text-gray-600 mt-3">
                            {language === "en" ? article.excerpt : article.excerpt_ar}
                        </p>


                        <div className="mt-10">

                            <h3 className="text-xl font-semibold mb-4">
                                {t("Tags")}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {article.tags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="bg-gray-100 px-4 py-2 rounded-full text-sm"
                                    >
                                        #{tag}
                                    </span>

                                ))}

                            </div>

                        </div>

                        <p className="text-gray-400 text-sm mt-3">
                            {language === "en" ? article.date : article.date_ar}
                        </p>

                    </div>

                    <div className="border border-[#1C1C1C] text-[#1C1C1C] rounded-3xl p-12 text-center">

                        <h2 className="text-3xl font-bold">

                            {t("Need More Information?")}

                        </h2>

                        <p className="mt-4 text-gray-500">

                            {t("Contact Sigma Machines to learn more about this machine or request a quotation.")}

                        </p>

                        <div className="mt-8 flex flex-col">

                            <Link href="tel:+966569745955">📞 +966569745955</Link>
                            <Link href="https://wa.me/+966569745955">⬅️ Whatsapp</Link>

                        </div>

                    </div>

                </div>

            </article>


        </>
    );
}