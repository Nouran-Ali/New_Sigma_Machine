import Meta from "@/comps/Meta";
import { useTranslation } from "react-i18next";

const Comingsoon = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>
      <Meta
        title="Contact Us"
        description="Get in touch with Sigma Machines for inquiries, support, or custom industrial solutions – we're here to help via email, phone, or WhatsApp."
      />

      <div className="bg-[#d9d6400d]" dir={language === "en" ? "ltr" : "rtl"}>
        <div className="px-24 max-xl:px-10 py-24">
          <h3 className="text-[#ffffff] text-4xl max-lg:text-2xl font-semibold text-center">
                {t("Coming Soon")}
              </h3>
        </div>
      </div>
    </>
  );
};

export default Comingsoon;
