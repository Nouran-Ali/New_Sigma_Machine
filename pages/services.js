import React from "react";
import styles from "../styles/Services.module.css";
import Image from "next/image";
import We_are_here_for_you from "@/comps/We_are_here_for_you";
import { Collapse } from "antd";
import Head from "next/head";
import Link from "next/link";
import Meta from "@/comps/Meta";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Why Sigma machines are so popular amonth others?",
    children: <p className="text-lg text-[#54545f] ml-6">Because we care about product quality, internal details, and after-sales service.</p>,
  },
  {
    key: "2",
    label: "What is the best way to get best from Sigma machines?",
    children: <p className="text-lg text-[#54545f] ml-6">By contacting us and specifying your product requirements, we will recommend the most suitable machine for your needs.</p>,
  },
  {
    key: "4",
    label: "What is the future plan for Sigma?",
    children: <p className="text-lg text-[#54545f] ml-6">Expanding our product range and extending our presence to more cities across the Middle East.</p>,
  },
];

const Services = () => {
  return (
    <>

      <Meta title="Services" description="Discover our full range of industrial services at Sigma Machines – from machine installation and maintenance to expert support and custom solutions." />

      <div className="relative">
        <div className={`${styles.bg_services} `}>
          <p className="text-center text-3xl max-lg:text-2xl text-white font-semibold pt-24 relative z-10">
            Sigma Machines Services
          </p>
        </div>

        {/* <div className="bg-[#00000085] max-lg:bg-[#4c4c4e] h-[250px] max-lg:h-full w-full absolute top-0 z-0"></div> */}
      </div>
      <div className="px-24 max-xl:px-10">
        <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 mt-20 max-xl:mt-10 mb-20">
          <div>
            <p className="text-[#d9d640] text-lg tracking-widest uppercase font-medium">
              Services
            </p>
            <h1 className="text-[#1c1c1c] mt-4 text-4xl max-lg:text-2xl font-bold">
              We Offer a Wide Variety of Technical Services
            </h1>
            <p className="text-[#54545f] text-xl mt-4">
              We are committed to meeting the most demanding industrial needs
              and delivering products that offer superior performance,
              precision, and reliability.
            </p>
            <img
              src="../services/1.jpg"
              width="600"
              height="150"
              className="mx-auto mt-9 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-6 mt-4">
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                1
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Maintenance of the machines
              </h3>
              <p className="text-[#54545f] text-lg my-4">
                Regular maintenance ensures the optimal performance and
                longevity of laser cutting machines. This includes cleaning
                optical components, checking gas flow systems, and calibrating
                the laser source.
              </p>
              <Link
                className="text-[#d9d640] text-lg mt-6"
                href="/themaintenance"
              >
                View more
              </Link>
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                2
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Spare parts for the machines
              </h3>
              <p className="text-[#54545f] text-lg mt-4">
                High-quality spare parts are essential for maintaining precision
                and efficiency. We provide reliable components to minimize
                downtime and keep your operations running smoothly.
              </p>
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                3
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Software and manuals
              </h3>
              <p className="text-[#54545f] text-lg mt-4">
                User-friendly software and comprehensive manuals help operators
                achieve accurate and efficient laser cuts while maximizing
                machine capabilities.
              </p>
            </div>
          </div>
        </div>

        <We_are_here_for_you />
      </div>
      <div className="bg-[#d9d64038] pt-64 pb-24 -mt-44">
        <div className="px-24 max-xl:px-10">
          <div className="text-center">
            <p className="text-[#d9d640] text-xl tracking-widest uppercase font-medium">
              Frequently Asked Questions
            </p>
            <h3 className="text-[#1c1c1c] mt-3 text-5xl font-bold mb-12">
              All that Need to Know
            </h3>
            {/* <p className="text-[#8d8e99] text-xl mt-5 mb-12">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <Collapse
            defaultActiveKey={["1"]}
            ghost
            showArrow={false}
            items={items}
            className="text-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
