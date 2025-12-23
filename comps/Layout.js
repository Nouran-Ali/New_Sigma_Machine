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
      {/* <Head>
        <title>Sigma Machines | High Quality Industrial Machinery</title>
        <meta
          name="description"
          content="Sigma Machines is your trusted partner in industrial machinery – discover our top-quality machines for all your needs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          property="og:title"
          content="Sigma Machines | High Quality Industrial Machinery"
        />
        <meta
          property="og:description"
          content="Sigma Machines offers reliable and efficient industrial machinery solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sigmamachines.net" />
        <meta
          property="og:image"
          content="https://sigmamachines.net/products/32.webp"
        />{" "}
        <link rel="icon" href="/favicon.ico" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sigma Machines",
              url: "https://sigmamachines.net",
              logo: "https://sigmamachines.net/logo.png",
            }),
          }}
        />
      </Head> */}

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
