import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppChatButton from "./WhatsAppChatButton";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import Head from "next/head";
import MetaDefaults from "./MetaDefaults";
import { useTranslation } from "react-i18next";
import { PhoneIcon } from "lucide-react";

const Layout = ({ children }) => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>

      <head>
        <MetaDefaults />
      </head>

      <Navbar />
      <div className={`${language === "ar" && "body_ar" }`}>{children}</div>
      <Link
        href="tel:+966569745955"
        className={`fixed bottom-44 max-lg:bottom-36 ${language === "en" ? "right-5" : "left-5"
          } z-50 bg-[#25D366] hover:bg-[#1ebe5d] p-4 max-lg:p-3 rounded-full flex items-center`}
      >
        <PhoneIcon className="text-white" />
        <span className="mx-4 text-sm text-white">{t("Contact Us")}</span>
      </Link>
      <Link
        href="mailto:info@sigmamachines.net"
        className={`fixed bottom-24 max-lg:bottom-20 ${language === "en" ? "right-5" : "left-5"} z-50 bg-[#3baec1] hover:bg-[#339aab] p-4 max-lg:p-3 rounded-full flex items-center`}
      >
        <EmailIcon className="text-white" />
        <span className="mx-2 text-sm text-white">{t("Send email")}</span>
      </Link>
      <WhatsAppChatButton message={`Hello, I need more information!`} />
      <Footer />
    </>
  );
};
export default Layout;
