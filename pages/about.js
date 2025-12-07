import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";
import { CheckCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import BiotechIcon from "@mui/icons-material/Biotech";
import InventoryIcon from "@mui/icons-material/Inventory";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Meta from "@/comps/Meta";
import { useTranslation } from "react-i18next";

const About = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  return (
    <>
      <Meta title="About Us" description="Learn more about Sigma Machines and our mission to provide quality machinery." />

      <div className="relative">
        <div className={`${styles.bg_about} `}>
          <h1 className="text-white text-5xl text-center pt-24 relative z-10">
            {t("About Us")}
          </h1>
        </div>
        {/* <div className="bg-[#00000085] max-lg:bg-[#4c4c4e] h-[250px] w-full absolute top-0 z-0"></div> */}
      </div>
      <div className="px-24 max-xl:px-10" dir={language === "en" ? "ltr" : "rtl"}>
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 mt-20 max-xl:mt-10 mb-20">
          <div>
            <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
              {t("About Us – Sigma Machines")}
            </p>
            <p className="text-[#1c1c1c] mt-3 text-3xl max-lg:text-2xl">
              {t("Sigma Machines is a leading supplier of advanced CNC and laser machinery, delivering high-performance industrial solutions that empower manufacturers across Saudi Arabia.")}
            </p>
            <p className="text-[#677289] mt-3">
              {t("about_sigma_mission")}
            </p>
            <div className="flex items-start mt-7">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="mx-3 text-[#212529] font-semibold">
                {t("about_sigma_point_1")}
              </p>
            </div>
            <div className="flex items-start mt-3">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="mx-3 text-[#212529] font-semibold">
                {t("about_sigma_point_2")}
              </p>
            </div>
            <div className="flex items-start mt-3">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="mx-3 text-[#212529] font-semibold">
                {t("about_sigma_point_3")}
              </p>
            </div>
            <div className="flex items-start mt-3">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="mx-3 text-[#212529] font-semibold">
                {t("about_sigma_point_4")}
              </p>
            </div>
            <p className="text-[#677289] mt-7 mb-12">
              {t("about_sigma_footer")}
            </p>
            <Link href="/services" className={styles.btn_more}>
              {t("Read More")}
            </Link>
          </div>

          <div className={`${language === "en" ? styles.bg_about_2 : styles.bg_about_2_AR} mobile_d_none`}>
            {/* <Image
              src="/../about/1.jfif"
              width={500}
              height={300}
              className="rounded-lg  mt-20"
            /> */}
            <img
              src="../about/1.jfif"
              width="500px"
              height="300px"
              className="rounded-lg  mt-20"
            />
          </div>
        </div>

        <div className="mt-24 mb-24">
          <h1 className="text-center text-3xl text-[#1c1c1c] font-semibold">
            {t("whyChooseSigma.why_title")}
          </h1>
          <p className="text-center text-xl mt-3 ">{t("whyChooseSigma.why_desc")}</p>
          <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-12">
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">{t("whyChooseSigma.why_point1_title")}</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point1_desc")}
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <BiotechIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">
                  {t("whyChooseSigma.why_point2_title")}
                </h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point2_desc")}
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <DomainVerificationIcon
                  sx={{ color: "#d9d640", fontSize: "38px" }}
                />
              </div>
              <div className="">
                <h3 className="text-xl text-center mt-4 mb-4">{t("whyChooseSigma.why_point3_title")}</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point3_desc")}
                </p>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">{t("whyChooseSigma.why_point4_title")}</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point4_desc")}
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <BiotechIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">
                  {t("whyChooseSigma.why_point5_title")}
                </h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point5_desc")}
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <DomainVerificationIcon
                  sx={{ color: "#d9d640", fontSize: "38px" }}
                />
              </div>
              <div className="">
                <h3 className="text-xl text-center mt-4 mb-4">{t("whyChooseSigma.why_point6_title")}</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point6_desc")}
                </p>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">{t("whyChooseSigma.why_point6_title")}</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  {t("whyChooseSigma.why_point7_desc")}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
