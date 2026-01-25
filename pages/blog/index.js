import Link from "next/link";
import { articles } from "@/lib/articles";
import { useTranslation } from "react-i18next";

export default function Blog() {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <div dir={language === "en" ? "ltr" : "rtl"} className="py-10 px-24 max-lg:px-5">
            <h1 className="mb-3">{t("Blog")}</h1>
            {articles.map((a) => (
                <div key={a.slug} className="bg-black p-3 text-white mb-3">
                    <Link href={`/blog/${a.slug}`}>{a.title}</Link>
                </div>
            ))}
        </div>
    );
}
