import Link from "next/link";
import { useTranslation } from "react-i18next";

const Product = ({
  href,
  title,
  method,
  background,
}) => {
  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
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
            <p className="text-[#94949bfa] font-semibold tracking-wide text-xs uppercase">
              {method}
            </p>

            <p className="text-white text-base font-bold">
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
