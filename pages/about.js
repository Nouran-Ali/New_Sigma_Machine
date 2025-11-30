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
              About Us – Sigma Machines
            </p>
            <p className="text-[#1c1c1c] mt-3 text-3xl max-lg:text-2xl">
              Sigma Machines is a leading supplier of advanced CNC and laser machinery, delivering high-performance industrial solutions that empower manufacturers across Saudi Arabia.
            </p>
            <p className="text-[#677289] mt-3">
              Our mission is simple: to enable government and educational institutions, companies, factories, and workshops to operate faster, smarter, and with higher precision, while upgrading and developing production lines.
            </p>
            <div className="flex items-start mt-7">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="ml-3 text-[#212529] font-semibold">
                We provide a complete range of machines including CNC routers, fiber laser cutting machines, CO₂ laser systems, CNC plasma cutters, press brakes, shearing machines, laser welding systems, and laser marking machines. Each machine is engineered to meet modern industrial demands—accuracy, reliability, and long-term durability.
              </p>
            </div>
            <div className="flex items-start mt-3">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="ml-3 text-[#212529] font-semibold">
                At Sigma Machines, we believe that strong industries are the foundation of a strong economy. That’s why our technology is built to support the Kingdom’s manufacturing growth and align with the goals of Saudi Vision 2030, helping local businesses upgrade their production capabilities and compete at global standards.
              </p>
            </div>
            <div className="flex items-start mt-3">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="ml-3 text-[#212529] font-semibold">
                Our machines are used by factories in sectors such as metal fabrication, furniture production, signage manufacturing, woodworking, advertising, automotive parts, and general industrial machining. Whether it’s boosting productivity, improving product quality, or reducing operating costs—our solutions are designed to deliver real impact on the production floor.
              </p>
            </div>
            <div className="flex items-start mt-3">
              <CheckCircleFilled className="text-[#d9d640] mt-1" />
              <p className="ml-3 text-[#212529] font-semibold">
                With a commitment to ongoing support, training, and customer success, Sigma Machines stands beside every client with reliable service and technical expertise. We don’t just sell machines—we build long-term partnerships that help companies grow, automate, and transform their manufacturing operations.
              </p>
            </div>
            <p className="text-[#677289] mt-7 mb-12">
              Sigma Machines — powering the next generation of industrial innovation in Saudi Arabia.
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
            Why Choose Sigma Machines?
          </h1>
          <p className="text-center text-xl mt-3 ">Choosing Sigma Machines means choosing reliability, advanced technology, and a partner who understands the manufacturing challenges of today’s market. We don’t just supply machines — we deliver solutions that help factories in Saudi Arabia improve productivity, elevate quality, and achieve sustainable growth.</p>
          <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-6 mt-12">
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">Industry-Leading CNC & Laser Technology</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  Our machines are engineered for precision, stability, and long-term performance. Whether you’re cutting, engraving, bending, welding, or marking — we provide equipment built to handle real industrial workloads.
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <BiotechIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">
                  Designed to Support Saudi Industry Growth
                </h3>
                <p className="text-[#54545f] px-4 text-center ">
                  Every machine we supply contributes directly to enhancing manufacturing capability across the Kingdom. We proudly support the goals of Saudi Vision 2030 by enabling factories to modernize and adopt smarter, faster, and more efficient production technologies.
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
                <h3 className="text-xl text-center mt-4 mb-4">Comprehensive Product Range</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  From CNC routers to fiber laser cutters, welding machines, plasma systems, press brakes, and shearing machines — you’ll find everything you need in one place. We cover multiple sectors: metal fabrication, furniture production, signage, engineering, and industrial manufacturing.
                </p>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">Professional Installation & Training</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  We ensure every customer receives proper machine setup, operator training, and best practices for safe and efficient operation — so you can start production confidently from day one.
                </p>
              </div>
            </Link>
            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <BiotechIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">
                  Reliable Technical Support & Maintenance
                </h3>
                <p className="text-[#54545f] px-4 text-center ">
                  Our service team provides ongoing assistance, troubleshooting, spare parts, and preventive maintenance to keep your machines running at peak performance with minimal downtime.
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
                <h3 className="text-xl text-center mt-4 mb-4">Competitive Pricing & High Value</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  We combine top-tier machine quality with fair pricing, ensuring the best return on investment for businesses of all sizes — from workshops to full-scale factories.
                </p>
              </div>
            </Link>

            <Link href="/" className="">
              <div className="bg-[#d9d64040] flex justify-center w-24 p-6 rounded-full mx-auto">
                <InventoryIcon sx={{ color: "#d9d640", fontSize: "38px" }} />
              </div>
              <div>
                <h3 className="text-xl text-center mt-4 mb-4">Long-Term Partnership Approach</h3>
                <p className="text-[#54545f] px-4 text-center ">
                  We don’t consider our job done after the sale. We support your growth, help optimize your workflow, and provide solutions as your production needs expand.
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
