import Link from "next/link";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";


const Product = ({
  href,
  title,
  method,
  description,
  area,
  speed,
  background,
}) => {
  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    // <Link href={href}>
    //   <div
    //     style={background}
    //     className={`bg-cover bg-no-repeat relative h-[350px] w-full ${styles.hover_content} rounded-lg flex flex-col justify-end items-center`}
    //   >
    //     <div className={`${styles.gradiant} rounded-lg`}></div>
    //     <div className={language == "ar" ? styles.title_ar : styles.title}>
    //       <p className="mt-3 text-lg text-white">{title}</p>
    //     </div>
    //     <div
    //       className={`bg-white rounded-lg xl:p-6 max-lg:p-4 w-4/5 flex flex-col justify-end mb-5 items-center ${styles.content} ${styles.animationButtom}`}
    //     >
    //       <div>
    //         <p className="mt-3 text-xl max-lg:text-lg text-[#212529]">
    //           {title}
    //         </p>
    //         <p className=" text-[#d9d640] mt-3">{method}</p>
    //         <p className="text-[#212529] mt-3">
    //           Description: <span className="text-[#677289]">{description}</span>
    //         </p>
    //         {/* <p className="text-[#212529] mt-3">Working Area: <span className="text-[#677289]">{area}</span></p>
    //                     <p className="text-[#212529] mt-3">Speed: <span className="text-[#677289]">{speed}</span></p> */}
    //       </div>
    //     </div>
    //   </div>
    // </Link>
    // <Link href={href}>
    //   <div className="p-2 rounded-3xl">

    //     <div className="max-w-sm bg-[#141414] rounded-2xl p-6 border border-yellow-500 shadow-xl hover:shadow-yellow-500/20 transition duration-500">

    //       {/* Image */}
    //       <div className="rounded-xl overflow-hidden border border-black relative -top-20 mx-7">
    //         <div
    //           style={background}
    //           className="h-56 w-full bg-cover bg-center transition duration-500 hover:scale-105"
    //         />
    //       </div>

    //       {/* Title + Price */}
    //       <div className="flex flex-col justify-between items-center mt-4">
    //         <p className="text-yellow-400 font-bold">{method}</p>
    //         <p className="text-white text-lg font-semibold">{title}</p>
    //       </div>

    //       {/* Button */}
    //       <button className="mt-5 w-full py-3 rounded-xl border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium">
    //         View Product
    //       </button>

    //     </div>
    //   </div>
    // </Link>
    <Link href={href}>
      <div className="relative pt-32 pb-10 group">

        {/* Card */}
        <div className="bg-[#111111] rounded-3xl border border-yellow-500/30 
                    shadow-2xl hover:shadow-yellow-500/20 
                    transition-all duration-500 
                    p-6 text-center overflow-visible">

          {/* Floating Image */}
          <div className="absolute top-0 mx-5
                      w-[80%] h-56 rounded-2xl overflow-hidden 
                      border-4 border-black shadow-xl
                      group-hover:scale-105 transition duration-500">

            <div
              style={background}
              className="w-full h-full bg-cover bg-center"
            />

            {/* subtle yellow glow */}
            <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          {/* Content */}
          <div className="mt-28 space-y-3">
            <p className="text-yellow-400 font-semibold tracking-wide text-xs uppercase">
              {method}
            </p>

            <p className="text-white text-sm font-bold">
              {title}
            </p>

            <button className="mt-4 w-full py-3 rounded-xl 
                          border border-yellow-400 
                          text-yellow-400 text-sm
                          hover:bg-yellow-400 
                          hover:text-black 
                          transition-all duration-300 
                          font-medium">
              {t("View Product")}
            </button>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default Product;
