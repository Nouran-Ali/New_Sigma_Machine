// import { GetStaticPaths, GetStaticProps } from "next";
// import Head from "next/head";
// import Image from "next/image";
// import { blogs } from "@/lib/blogs";
// import { useTranslation } from "react-i18next";

// export const getStaticPaths = async () => {
//     const paths = blogs.map((a) => ({
//         params: { slug: a.slug },
//     }));

//     return { paths, fallback: false };
// };

// export const getStaticProps = async ({ params }) => {
//     const article = blogs.find((a) => a.slug === params?.slug);

//     if (!article) return null;

//     return {
//         props: { article },
//     };
// };


// export default function Article({ article }) {
//     if (!article) return null;

//     const [t, i18n] = useTranslation();
//     const { language } = i18n;

//     return (
//         <>
//             <Head>
//                 <title>{language === "en" ? article.title : article.title_ar}</title>
//                 <meta name="description" content={language === "en" ? article.description : article.description_ar} />
//                 <meta name="keywords" content={language === "en" ? article.keywords : article.keywords_ar} />

//                 {/* Open Graph */}
//                 <meta property="og:title" content={language === "en" ? article.title : article.title_ar} />
//                 <meta property="og:description" content={language === "en" ? article.description : article.description_ar} />
//                 <meta property="og:image" content={article.image} />
//                 <meta property="og:type" content="article" />

//                 {/* Structured Data */}
//                 <script
//                     type="application/ld+json"
//                     dangerouslySetInnerHTML={{
//                         __html: JSON.stringify({
//                             "@context": "https://schema.org",
//                             "@type": "Article",
//                             headline: language === "en" ? article.title : article.title_ar,
//                             image: article.image,
//                             datePublished: article.date,
//                             description: language === "en" ? article.description : article.description_ar,
//                         }),
//                     }}
//                 />
//             </Head>

//             <article className="prose mx-auto pb-10 px-24 max-lg:px-5" dir={language === "en" ? "ltr" : "rtl"}>
//                 {/* <h1>{article.title}</h1>

//                 <Image
//                     src={article.image}
//                     alt={article.title}
//                     width={400}
//                     height={400}
//                 /> */}
//                 <div
//                     className="bg-[#101010] rounded-2xl overflow-hidden"
//                 >

//                     <img
//                         src={article.image}
//                         alt={language === "en" ? article.title : article.title_ar}
//                         className="w-full h-64 object-cover"
//                     />

//                     <div className="p-6">

//                         <span className="text-[#D97706] text-sm">
//                             {language === "en" ? article.category : article.category_ar}
//                         </span>

//                         <h2 className="font-bold text-xl mt-2 line-clamp-2">
//                             {language === "en" ? article.title : article.title_ar}
//                         </h2>

//                         <p className="text-[#a2a2a3] mt-3">
//                             {language === "en" ? article.excerpt : article.excerpt_ar}
//                         </p>
//                         {/* <p className="text-gray-600 mt-3 mb-4">
//                             {language === "en" ? article.description : article.description_ar}
//                         </p> */}

//                         {
//                             (article?.content?.en || article?.content?.ar) &&
//                             <div
//                                 className="max-w-none [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-[#a2a2a3] [&_p]:leading-8 [&_p]:mb-4"
//                                 dangerouslySetInnerHTML={{
//                                     __html: language === "en" ? article.content.en : article.content.ar,
//                                 }}
//                             />
//                         }



//                         <p className="text-[#a2a2a3] text-sm mt-3">
//                             {language === "en" ? article.date : article.date_ar}
//                         </p>

//                     </div>

//                 </div>

//             </article>


//         </>
//     );
// }

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { useTranslation } from "react-i18next";

export const getStaticPaths = async () => {
  const paths = blogs.map((a) => ({
    params: { slug: a.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const article = blogs.find((a) => a.slug === params?.slug);

  if (!article) return { notFound: true };

  // ترتيب المقالات وحساب المقال السابق واللاحق والمقالات ذات الصلة
  const sortedBlogs = [...blogs].sort((a, b) => a.id - b.id);
  const currentIndex = sortedBlogs.findIndex((item) => item.id === article.id);

  const previousArticle = currentIndex > 0 ? sortedBlogs[currentIndex - 1] : null;
  const nextArticle = currentIndex < sortedBlogs.length - 1 ? sortedBlogs[currentIndex + 1] : null;

  const relatedArticles = sortedBlogs
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  return {
    props: {
      article,
      previousArticle,
      nextArticle,
      relatedArticles,
    },
  };
};

export default function Article({ article, previousArticle, nextArticle, relatedArticles }) {
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
        <div className="bg-[#101010] rounded-2xl overflow-hidden shadow-lg border border-[#242424]">
          <img
            src={article.image}
            alt={language === "en" ? article.title : article.title_ar}
            className="w-full h-80 object-cover"
          />

          <div className="p-6 md:p-8">
            <span className="text-[#D97706] text-sm font-semibold">
              {language === "en" ? article.category : article.category_ar}
            </span>

            <h1 className="text-white font-bold text-2xl md:text-4xl mt-2 mb-4 leading-tight">
              {language === "en" ? article.title : article.title_ar}
            </h1>

            <p className="text-[#a2a2a3] text-lg mb-6 border-b border-[#242424] pb-6">
              {language === "en" ? article.excerpt : article.excerpt_ar}
            </p>

            {(article?.content?.en || article?.content?.ar) && (
              <div
                className="max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#D97706] [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-[#a2a2a3] [&_p]:leading-8 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:pr-5 [&_ul]:text-[#a2a2a3] [&_li]:mb-2 [&_a]:text-[#D97706] [&_a]:underline"
                dangerouslySetInnerHTML={{
                  __html: language === "en" ? article.content.en : article.content.ar,
                }}
              />
            )}

            <p className="text-gray-500 text-sm mt-8 pt-4 border-t border-[#242424]">
              {language === "en" ? article.date : article.date_ar}
            </p>
          </div>
        </div>

        {/* 1. قسم التنقل بين المقال السابق واللاحق (Previous / Next) */}
        <div className="mt-12 grid grid-cols-2 gap-4">
          {previousArticle ? (
            <Link
              href={`/blog/${previousArticle.slug}`}
              className="group border border-[#242424] rounded-xl p-5 hover:border-[#D97706] transition flex items-center gap-4"
            >
              <span className="text-[#D97706] text-2xl group-hover:-translate-x-1 transition-transform">
                {language === "en" ? "←" : "→"}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-1">
                  {language === "en" ? "Previous Article" : "المقال السابق"}
                </p>
                <h3 className="text-white max-lg:hidden text-sm font-medium line-clamp-1 group-hover:text-[#D97706] transition">
                  {language === "en" ? previousArticle.title : previousArticle.title_ar}
                </h3>
              </div>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link
              href={`/blog/${nextArticle.slug}`}
              className="group border border-[#242424] rounded-xl p-5 hover:border-[#D97706] transition flex items-center justify-end text-right gap-4"
            >
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-1">
                  {language === "en" ? "Next Article" : "المقال التالي"}
                </p>
                <h3 className="text-white max-lg:hidden text-sm font-medium line-clamp-1 group-hover:text-[#D97706] transition">
                  {language === "en" ? nextArticle.title : nextArticle.title_ar}
                </h3>
              </div>
              <span className="text-[#D97706] text-2xl group-hover:translate-x-1 transition-transform">
                {language === "en" ? "→" : "←"}
              </span>
            </Link>
          ) : <div />}
        </div>

        {/* 2. قسم مقالات ذات صلة (Related Articles) */}
        {relatedArticles?.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#242424]">
            <h3 className="text-white text-xl font-bold mb-6">
              {language === "en" ? "Related Articles" : "مقالات ذات صلة"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="bg-[#101010] border border-[#242424] rounded-xl overflow-hidden hover:border-[#D97706] transition group flex flex-col"
                >
                  <img
                    src={rel.image}
                    alt={language === "en" ? rel.title : rel.title_ar}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <span className="text-[#D97706] text-xs">
                        {language === "en" ? rel.category : rel.category_ar}
                      </span>
                      <h4 className="text-white font-semibold text-sm mt-1 line-clamp-2 group-hover:text-[#D97706] transition">
                        {language === "en" ? rel.title : rel.title_ar}
                      </h4>
                    </div>
                    <p className="text-gray-500 text-xs mt-3">
                      {language === "en" ? rel.date : rel.date_ar}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}