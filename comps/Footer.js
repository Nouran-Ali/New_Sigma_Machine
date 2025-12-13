import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { TikTokOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>
      <div className="relative" dir={language === "en" ? "ltr" : "rtl"}>
        <div className={`${styles.bg_footer}`}>
          <div className="relative z-10">
            <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-4 px-24 max-xl:px-10 text-white font-medium pt-24 pb-24">
              <div className={`${language === "en" ? styles.border : styles.borderAr} pr-6`}>
                <div className="flex">
                  <img src="../logo2.png" width="90px" />
                  {/* <Image src="/logo2.png" width={90} height={60} className="" /> */}
                  {/* <h3 className='text-[#fff] mt-4 text-xl font-bold'>Sigma Machines</h3> */}
                </div>
                <p className="mt-6">
                  {t("Sigma Machines — your trusted partner for smarter, faster, and more efficient industrial manufacturing.")}
                </p>
              </div>
              <div className={`${language === "en" ? styles.border : styles.borderAr} pl-6 max-xl:pl-0`}>
                <h3 className="text-[#fff] mt-4 text-xl">{t("Quick Links")}</h3>
                <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-2 mt-6 font-light">
                  <Link href="/about">{t("About us")}</Link>
                  <Link href="/services">{t("Services")}</Link>
                  <Link href="/products/1"> {t("Products")}</Link>
                  <Link href="/themaintenance"> {t("Maintenance")}</Link>
                  <Link href="/contact"> {t("Contact")}</Link>
                </div>
              </div>
              <div className="pl-6 max-xl:pl-0">
                <h3 className="text-[#fff] mt-4 text-xl"> {t("Contact Us")}</h3>
                <div className="flex mt-6">
                  {/* <img
                    src="../home/facebook.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  /> */}
                  <Link href="https://www.facebook.com/share/177NhW552u/">
                    <img
                      src="../home/facebook.png"
                      width={30}
                      height={60}
                      className="mr-3"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/sigma_machines?igsh=MWRlMmc4OTMyanJwZQ==">
                    <img
                      src="../home/instagram.png"
                      width={30}
                      height={60}
                      className="mr-3"
                    />
                  </Link>

                  <Link href="https://www.tiktok.com/@sigma.machines?_t=ZS-8zhbiPLCRDk&_r=1">
                    {/* <TikTokFilled className="text-3xl mr-3"/> */}
                    <TikTokOutlined className="text-3xl mr-3" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/sigma-machines/">
                    <img
                      src="../home/linkedin.png"
                      width={30}
                      height={60}
                      className="mr-3"
                    />
                  </Link>
                  {/* <img
                    src="../home/linkedin.png"
                    width={30}
                    height={60}
                    className="mr-3"
                  /> */}
                  {/* <Link href="mailto:info@sigmamachines.net">
                    <img src="../home/search.png" width={30} height={60} />
                  </Link> */}
                </div>
              </div>
            </div>
            <div
              className={`${styles.border_top} px-24 max-xl:px-10 text-white font-medium py-7`}
            >
              <p>
                 {t("Copyright © 2025")}
                <Link
                  href="https://www.linkedin.com/in/nouran-ali-1732b8266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-white font-light"
                >
                   {t("here.")}
                </Link>{" "}
                 {t("All Rights Reserved.")}
              </p>
            </div>
          </div>
        </div>
        {/* <div className="bg-[#fffa004f] h-[450px] max-lg:h-full w-full absolute top-0 z-0"></div> */}
      </div>
    </>
  );
};

export default Footer;
