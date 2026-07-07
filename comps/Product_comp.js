import { Rate } from "antd";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Product = ({
  href,
  title,
  method,
  background,
  rate
}) => {
  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    // <Link href={href}>
    //   <div className="relative pt-32 pb-10 group">

    //     {/* Card */}
    //     <div className="bg-[#111111] rounded-3xl border border-yellow-500/30 
    //                 shadow-2xl hover:shadow-yellow-500/20 
    //                 transition-all duration-500 
    //                 p-6 text-center overflow-visible">

    //       {/* Floating Image */}
    //       <div className="absolute top-0 mx-5
    //                   w-[80%] h-56 rounded-2xl overflow-hidden 
    //                   border-4 border-black shadow-xl
    //                   group-hover:scale-105 transition duration-500">

    //         <div
    //           style={background}
    //           className="w-full h-full bg-cover bg-center"
    //         />

    //         {/* subtle yellow glow */}
    //         <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
    //       </div>

    //       {/* Content */}
    //       <div className="mt-28 space-y-3">
    //         <p className="text-[#94949bfa] font-semibold tracking-wide text-xs uppercase">
    //           {method}
    //         </p>

    //         <p className="text-white text-base font-bold">
    //           {title}
    //         </p>

    //         <button className="mt-4 w-full py-3 rounded-xl 
    //                       border border-yellow-400 
    //                       text-yellow-400 text-sm
    //                       hover:bg-yellow-400 
    //                       hover:text-black 
    //                       transition-all duration-300 
    //                       font-medium">
    //           {t("View Product")}
    //         </button>
    //       </div>
    //     </div>

    //   </div>
    // </Link>


    <Link href={href} className="block h-full">
      <div className="group relative p-2 select-none h-full">

        {/* Glow - توهج الخلفية عند التحويم */}
        <div className="absolute inset-0 rounded-[35px] bg-yellow-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

        {/* Card Body */}
        <div className="relative overflow-hidden rounded-[40px] bg-[#111] border border-yellow-500/30 transition-all duration-500 group-hover:border-yellow-400/80 group-hover:shadow-[0_0_50px_rgba(234,179,8,0.2)] h-full flex flex-col flex-1">

          {/* Top Icon Area (عربة التسوق بشكل الشطب المائل المتناسق) */}
          <div
            className="absolute left-0 top-0 w-24 h-16 bg-yellow-400 flex items-center justify-center"
            style={{
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
            }}
          >
            <ShoppingCart size={22} className="text-black -ml-3 -mt-1" />
          </div>

          {/* Background Decorative Ripples (الخطوط الدائرية أسفل اليمين) */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-yellow-500/5 pointer-events-none"></div>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-yellow-500/5 pointer-events-none"></div>
          <div className="absolute -right-0 -bottom-0 w-32 h-32 rounded-full border border-yellow-500/5 pointer-events-none"></div>

          {/* Dot Grid Matrix (النقاط المضيئة على اليمين المنتصف) */}
          <div className="absolute right-6 top-[52%] transform -translate-y-1/2 flex flex-col gap-1.5 opacity-60 pointer-events-none">
            {[...Array(4)].map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-1.5 justify-end">
                {[...Array(rowIndex + 1)].map((_, dotIndex) => (
                  <div key={dotIndex} className="w-1 h-1 rounded-full bg-yellow-400"></div>
                ))}
              </div>
            ))}
          </div>

          {/* Image Container */}
          <div className="p-5 pt-8">
            <div
              className="relative h-64 overflow-hidden bg-yellow-400/90 transition-all duration-500 group-hover:scale-[1.01]"
              style={{
                /* قطع هندسي دقيق لمحاكاة الميل والانحناء في التصميم */
                clipPath: "polygon(22% 0%, 100% 0%, 100% 70%, 55% 100%, 0% 100%, 12% 45%)",
                padding: '2px' // يعمل كإطار داخلي مضيء
              }}
            >
              {/* الصورة الداخلية المعطوفة بنفس القطع الهندي */}
              <div
                style={{
                  ...background,
                  clipPath: "polygon(22% 0%, 100% 0%, 100% 70%, 55% 100%, 0% 100%, 12% 45%)",
                }}
                className="w-full h-full bg-cover bg-center bg-[#1a1a1a]"
              />
              {/* إضاءة متدرجة فوق الصورة */}
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Content Text & Button */}
            <div className="mt-8 px-2 pb-3 flex flex-col flex-1">
              <span className="text-yellow-400 uppercase tracking-[4px] text-[11px] font-bold block mb-2">
                {method}
              </span>

              <h3 className="text-2xl font-bold text-white tracking-wide leading-tight mb-5">
                {title}
              </h3>

              <div className="w-12 h-[3px] rounded-full bg-yellow-400 mb-5"></div>


              {
                (rate === 0 || rate === null) ? <p className="text-yellow-400 uppercase tracking-[4px] text-[11px] font-bold block mb-2">{language === "en" ? "No rates" : "لا يوجد تقييم بعد"}</p> :
                  <Rate className="mb-5" value={rate} disabled />
              }

              {/* Action Button */}
              <button
                className="w-full mt-auto rounded-2xl border border-yellow-400/60 py-4 flex items-center justify-between px-6 text-yellow-400 font-medium transition-all duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                <span className="text-sm tracking-wide">{t("View Product")}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
