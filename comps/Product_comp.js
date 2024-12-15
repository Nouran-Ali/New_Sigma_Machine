import Link from "next/link";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Product = ({ href, title, method, description, area, speed, background }) => {

    const [t, i18n] = useTranslation();
    const { language } = i18n;

    return (
        <Link href={href}>
            <div style={background} className={`bg-cover bg-no-repeat relative h-[350px] w-full ${styles.hover_content} rounded-lg flex flex-col justify-end items-center`}>
                <div className={`${styles.gradiant} rounded-lg`}></div>
                <div className={language == "ar" ? styles.title_ar : styles.title}>
                    <p className="mt-3 text-lg text-white">{title}</p>
                </div>
                <div className={`bg-white rounded-lg xl:p-6 max-lg:p-4 w-4/5 flex flex-col justify-end mb-5 items-center ${styles.content} ${styles.animationButtom}`}>
                    <div>
                        <p className="mt-3 text-xl max-lg:text-lg text-[#212529]">{title}</p>
                        <p className=" text-[#d9d640] mt-3">{method}</p>
                        <p className="text-[#212529] mt-3">Description: <span className="text-[#677289]">{description}</span></p>
                        {/* <p className="text-[#212529] mt-3">Working Area: <span className="text-[#677289]">{area}</span></p>
                        <p className="text-[#212529] mt-3">Speed: <span className="text-[#677289]">{speed}</span></p> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product