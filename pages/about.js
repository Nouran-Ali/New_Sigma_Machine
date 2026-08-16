import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";
import { CheckCircleFilled, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";
import BiotechIcon from "@mui/icons-material/Biotech";
import InventoryIcon from "@mui/icons-material/Inventory";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Meta from "@/comps/Meta";
import { useTranslation } from "react-i18next";
import { Collapse } from "antd";
import We_are_here_for_you from "@/comps/We_are_here_for_you";

const About = () => {

  const [t, i18n] = useTranslation();
  const { language } = i18n;

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
        {
            key: "1",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("What is a CNC machine and what are its main uses?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("A CNC machine (Computer Numerical Control) is an automated manufacturing machine that uses computer-controlled instructions to cut, engrave, drill, shape, and fabricate materials with high precision. CNC machines are widely used in woodworking, metal fabrication, acrylic processing, furniture manufacturing, signage production, and industrial manufacturing applications.")}</p>,
        },
        {
            key: "2",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("How does a CNC machine work?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("A CNC machine operates using digital design files created through CAD/CAM software. The machine follows programmed instructions to automatically control movement, cutting tools, and machining operations, delivering accurate, repeatable, and efficient production results while minimizing human error.")}</p>,
        },
        {
            key: "3",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("What is the difference between a CNC Router and other CNC machines?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("A CNC Router is primarily designed for cutting and engraving wood, MDF, acrylic, plastics, and composite materials. Other CNC machines such as CNC milling machines, CNC lathes, and fiber laser cutting machines are optimized for metalworking, precision machining, and industrial manufacturing applications. Choosing the right machine depends on your material type, production goals, and project requirements.")}</p>,
        },
        {
            key: "4",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("What is the difference between 3-axis, 4-axis, and 5-axis CNC machines?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("A 3-axis CNC machine handles standard cutting and engraving tasks, while a 4-axis CNC machine adds rotational movement for more complex shapes. A 5-axis CNC machine offers advanced multi-directional machining capabilities, making it ideal for highly detailed industrial components, molds, and precision manufacturing projects.")}</p>,
        },
        {
            key: "5",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("How do I choose the right CNC machine for my project?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("Selecting the right CNC machine depends on several factors including material type, production volume, workpiece dimensions, required precision, and available budget. Sigma Machines helps customers identify the most suitable CNC solution based on their business needs, workspace requirements, and future production goals.")}</p>,
        },
        {
            key: "6",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("How much does a CNC machine cost?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("The price of a CNC machine varies depending on machine size, working area, number of axes, automation features, spindle power, and production capabilities. Entry-level CNC machines are typically more affordable, while industrial CNC machines with advanced specifications require a higher investment. Contact Sigma Machines for a customized quotation based on your specific requirements.")}</p>,
        },
        {
            key: "7",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("Does Sigma provide installation and training after purchasing a CNC machine?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("Yes. Sigma Machines provides professional machine installation, operator training, and technical guidance to ensure customers can safely and efficiently operate their CNC machines. Our team supports clients throughout the setup process and beyond.")}</p>,
        },
        {
            key: "8",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("Does Sigma provide CNC machine maintenance and spare parts?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("Yes. Sigma Machines offers preventive maintenance services, technical support, troubleshooting assistance, and genuine spare parts for CNC machines. Our maintenance solutions help maximize machine performance, reduce downtime, and extend equipment lifespan.")}</p>,
        },
        {
            key: "9",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("Can a CNC machine be upgraded after purchase?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("In many cases, CNC machines can be upgraded with additional features such as rotary axes, automation systems, software enhancements, improved spindles, and advanced control systems. Sigma Machines can evaluate upgrade possibilities based on your machine model and production requirements.")}</p>,
        },
        {
            key: "10",
            label: <p className="text-lg text-[#ffffff] ml-6">{t("What services does Sigma Machines provide for CNC machines?")}</p>,
            children: <p className="text-lg text-[#a2a2a3] ml-6">{t("Sigma Machines provides complete CNC solutions including machine supply, consultation, installation, operator training, maintenance services, technical support, spare parts, machine upgrades, and after-sales services. We help manufacturers improve productivity, precision, and operational efficiency through reliable CNC technology.")}</p>,
        },

    ];

  return (
    <>
      <Meta title="About Us" description="Learn more about Sigma Machines and our mission to provide quality machinery." />

      <div dir={language === "en" ? "ltr" : "rtl"}>
        <div className="relative">
          <div className={`${styles.bg_about} `}>
            <h1 className="text-white text-5xl text-center pt-24 relative z-10">
              {t("About Us")}
            </h1>
          </div>
          {/* <div className="bg-[#00000085] max-lg:bg-[#4c4c4e] h-[250px] w-full absolute top-0 z-0"></div> */}
        </div>
        <div className="px-24 max-xl:px-10" >
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 mt-20 max-xl:mt-10 mb-20">
            <div>
              <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
                {t("About Us – Sigma Machines")}
              </p>
              <p className="text-[#ffffff] mt-3 text-3xl max-lg:text-2xl">
                {t("Sigma Machines is a leading supplier of advanced CNC and laser machinery, delivering high-performance industrial solutions that empower manufacturers across Saudi Arabia.")}
              </p>
              <p className="text-[#a2a2a3] mt-3">
                {t("about_sigma_mission")}
              </p>
              <div className="flex items-start mt-7">
                <CheckCircleFilled className="text-[#d9d640] mt-1" />
                <p className="mx-3 text-[#ffffff] font-semibold">
                  {t("about_sigma_point_1")}
                </p>
              </div>
              <div className="flex items-start mt-3">
                <CheckCircleFilled className="text-[#d9d640] mt-1" />
                <p className="mx-3 text-[#ffffff] font-semibold">
                  {t("about_sigma_point_2")}
                </p>
              </div>
              <div className="flex items-start mt-3">
                <CheckCircleFilled className="text-[#d9d640] mt-1" />
                <p className="mx-3 text-[#ffffff] font-semibold">
                  {t("about_sigma_point_3")}
                </p>
              </div>
              <div className="flex items-start mt-3">
                <CheckCircleFilled className="text-[#d9d640] mt-1" />
                <p className="mx-3 text-[#ffffff] font-semibold">
                  {t("about_sigma_point_4")}
                </p>
              </div>
              <p className="text-[#a2a2a3] mt-7 mb-12">
                {t("about_sigma_footer")}
              </p>
              <Link href="/services" className={styles.btn_more}>
                {t("Read More")}
              </Link>
            </div>

            <div className={` ${language === "en" ? styles.bg_about_2 : styles.bg_about_2_AR} `}>
              {/* <img
                src="../about/1.jfif"
                width="500px"
                height="300px"
                className="rounded-lg  mt-20"
              /> */}
              <video
                src="../about/fiber marker.mp4"
                width="400"
                height="300"
                className="rounded-xl mt-0 object-cover mx-auto max-lg:mt-5"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="mt-24 mb-24">
            <h1 className="text-center text-3xl text-[#a2a2a3] font-semibold">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
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
                  <p className="text-[#a2a2a3] px-4 text-center ">
                    {t("whyChooseSigma.why_point7_desc")}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <We_are_here_for_you />
        </div>
        <div className="bg-[#d9d6400d] pt-64 pb-24 -mt-44">
          <div className="px-24 max-xl:px-10">
            <div className="text-center">
              <p className="text-[#d9d640] text-xl tracking-widest uppercase font-medium">
                {t("Frequently Asked Questions")}
              </p>
              <h3 className="text-[#ffffff] mt-3 text-5xl font-bold mb-12">
                {t("All that Need to Know")}
              </h3>
              {/* <p className="text-[#8d8e99] text-xl mt-5 mb-12">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p> */}
            </div>

            <Collapse
              defaultActiveKey={["1"]}
              ghost
              // showArrow={false}
              showArrow
              items={items}
              className="text-2xl"
              expandIcon={({ isActive }) =>
                isActive ? (
                  <MinusOutlined className="text-xl text-[#ffffff] mt-4" />
                ) : (
                  <PlusOutlined className="text-xl text-[#ffffff] mt-4" />
                )
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
