import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { useTranslation } from "react-i18next";

export const getStaticPaths = async () => {
    const paths = articles.map((a) => ({
        params: { slug: a.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const article = articles.find((a) => a.slug === params?.slug);

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
                <title>{article.title}</title>
                <meta name="description" content={article.description} />
                <meta name="keywords" content={article.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={article.title} />
                <meta property="og:description" content={article.description} />
                <meta property="og:image" content={article.image} />
                <meta property="og:type" content="article" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            headline: article.title,
                            image: article.image,
                            datePublished: article.date,
                            description: article.description,
                        }),
                    }}
                />
            </Head>

            <article className="prose mx-auto py-10 px-24 max-lg:px-5" dir={language === "en" ? "ltr" : "rtl"}>
                <h1>{article.title}</h1>

                <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={400}
                />

                <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </article>
        </>
    );
}