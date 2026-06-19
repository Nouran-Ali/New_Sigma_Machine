import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { caseStudies } from "@/lib/caseStudies";
import { useTranslation } from "react-i18next";

export const getStaticPaths = async () => {
    const paths = caseStudies.map((a) => ({
        params: { slug: a.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const article = caseStudies.find((a) => a.slug === params?.slug);

    return {
        props: { article },
    };
};


export default function Case({ article }) {
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
                {/* <h1>{article.title}</h1>

                <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={400}
                /> */}
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




                        <h2 className="mt-3 text-lg ">Challenge</h2>
                        <p className="text-gray-600 mt-1">{language === "ar" ? article.challenge_ar : article.challenge}</p>

                        <h2 className="mt-3 text-lg ">Solution</h2>
                        <p className="text-gray-600 mt-1">{language === "ar" ? article.solution_ar : article.solution}</p>

                        <h2 className="mt-3 text-lg ">Results</h2>

                        <ul className="text-gray-600 mt-1">
                            {(language === "ar"
                                ? article.results_ar
                                : article.results
                            ).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <h2 className="mt-3 text-lg ">Technologies Used</h2>

                        <ul className="text-gray-600 mt-1">
                            {(language === "ar"
                                ? article.technologies_ar
                                : article.technologies
                            ).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                    </div>

                </div>

            </article>


        </>
    );
}