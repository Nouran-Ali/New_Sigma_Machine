import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";
import { CheckCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import BiotechIcon from "@mui/icons-material/Biotech";
import InventoryIcon from "@mui/icons-material/Inventory";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import Meta from "@/comps/Meta";

const About = () => {
  return (
    <>
      <Meta title="About Us" description="Learn more about Sigma Machines and our mission to provide quality machinery." />

      <div className="relative">
        <div className={`${styles.bg_about} `}>
          <h1 className="text-white text-5xl text-center pt-24 relative z-10">
            About Us
          </h1>
        </div>
        {/* <div className="bg-[#00000085] max-lg:bg-[#4c4c4e] h-[250px] w-full absolute top-0 z-0"></div> */}
      </div>
      <div className="px-24 max-xl:px-10">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 mt-20 max-xl:mt-10 mb-20">
          <div>
            <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
              ABOUT US
            </p>
            <p className="text-[#1c1c1c] mt-3 text-4xl max-lg:text-2xl">
              Leading international developer and manufacturer of laser
              machines.
            </p>
            <p className="text-[#677289] mt-7">
              Our machines are built to handle a wide range of materials,
              including metals, wood, and composites. We serve industries such
              as automotive, aerospace, furniture manufacturing, construction,
              and more, providing tailored solutions that improve operational
              efficiency, reduce material waste, and enhance product quality.
            </p>
            <div className="flex items-center mt-7">
              <CheckCircleFilled className="text-[#d9d640]" />
              <p className="ml-3 text-[#212529] font-semibold">
                Senior technical team
              </p>
            </div>
            <div className="flex items-center mt-2">
              <CheckCircleFilled className="text-[#d9d640]" />
              <p className="ml-3 text-[#212529] font-semibold">
                Professional customer service team
              </p>
            </div>
            <div className="flex items-center mt-2">
              <CheckCircleFilled className="text-[#d9d640]" />
              <p className="ml-3 text-[#212529] font-semibold">
                Recruitment Agents
              </p>
            </div>
            <p className="text-[#677289] mt-7 mb-12">
              Our business philosophy: quality changes the world, service
              creates value!
            </p>
            <Link href="/services" className={styles.btn_more}>
              Read More
            </Link>
          </div>

          <div className={`${styles.bg_about_2} mobile_d_none`}>
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
            Why Choose Us
          </h1>
          <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-12">
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">Product</h3>
                <p className="text-[#54545f] px-4">
                  Each product from is strictly examined according to ISO9001
                  (QCS) and ISO14001 (EMS) standards before it is put on to the
                  market.
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <BiotechIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">
                  Scientific Research
                </h3>
                <p className="text-[#54545f] px-4">
                  We are fully committed and devoted to enhance our technology
                  leadership in laser industry.
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
                <h3 className="text-xl text-center mt-4 mb-4">Standard</h3>
                <p className="text-[#54545f] px-4">
                  We have more than 200 machine models, All these equipments
                  have been widely used in the production of different products.
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
