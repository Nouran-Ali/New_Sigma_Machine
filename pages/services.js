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

      {/* <Meta title="Services" description="Discover our full range of industrial services at Sigma Machines – from machine installation and maintenance to expert support and custom solutions." /> */}

      <Meta
        title="CNC & Laser Machine Maintenance in Saudi Arabia | Professional Service & Technical Support – Sigma Machines"
        description="Professional CNC and laser machine maintenance in Saudi Arabia. Sigma Machines offers after-sales service, annual maintenance contracts, on-site repairs, and local support for Chinese CNC machines."
        keywords="
    CNC machine maintenance Saudi Arabia,
    Fiber laser machine maintenance,
    CNC router repair service,
    Laser welding machine maintenance,
    Industrial machine maintenance KSA,
    China CNC distributor service Saudi Arabia,
    On-site CNC repair,
    Preventive maintenance Saudi Arabia
  "
      />


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
              Service
            </p>
            <h1 className="text-[#1c1c1c] mt-4 text-4xl max-lg:text-2xl font-bold">
              Professional Maintenance & Technical Support
            </h1>
            <p className="text-[#54545f] text-xl mt-4">
              At Sigma Machines, service is not an option — it’s a core part of our identity. We provide one of the strongest post-sales technical support systems in Saudi Arabia, ensuring every machine operates at peak performance with minimal downtime.
            </p>
            <img
              src="../services/1.jpg"
              width="600"
              height="150"
              className="mx-auto mt-9 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 max-xl:grid-cols-1 gap-6 mt-4">
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                1
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Strong After-Sales Maintenance Team
              </h3>
              <p className="text-[#54545f] text-lg my-4">
                Our dedicated maintenance engineers are highly trained and experienced in CNC routers, fiber laser cutters, CO₂ laser machines, welding systems, plasma machines, press brakes, and shearing equipment.
                We respond quickly, diagnose accurately, and fix issues efficiently — keeping your production running without interruption.
              </p>
              {/* <Link
                className="text-[#d9d640] text-lg mt-6"
                href="/themaintenance"
              >
                View more
              </Link> */}
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                2
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Annual Maintenance Contracts
              </h3>
              <p className="text-[#54545f] text-lg mt-4">
                We offer professional preventive maintenance plans tailored to factories, workshops, and production lines.
                Contracts include:

                Scheduled preventive inspections

                Full machine check-ups

                Laser alignment & calibration

                Lubrication & mechanical adjustments

                Electrical diagnostics

                Performance optimization

                These plans help extend machine lifespan, reduce breakdowns, and ensure stable, high-quality production.

              </p>
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                3
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                On-Site External Maintenance Service
              </h3>
              <p className="text-[#54545f] text-lg mt-4">
                Our technicians can visit your facility anywhere in Saudi Arabia to perform full maintenance, emergency repairs, calibration, and upgrades.
                We provide:

                Emergency breakdown support

                Replacement of critical parts

                System recalibration

                Motion system tuning

                Software troubleshooting

                Operator training and re-training

                Maintenance isn’t limited to our machines — we service all types of machines

              </p>
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                4
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Support for Chinese and International Suppliers in Saudi Arabia
              </h3>
              <p className="text-[#54545f] text-lg mt-4">
                Sigma Machines provides full technical support and maintenance services for Chinese and international CNC and laser equipment suppliers operating in the Saudi market.
                We act as a reliable local service partner for manufacturers who do not have a dedicated technical team inside the Kingdom.

                Our team handles:

                Warranty repairs

                On-site technical visits

                Machine installation & commissioning

                Preventive maintenance contracts

                Spare parts replacement

                Operator training and re-training

                We support all major technologies including fiber laser cutting, CNC routers (3/4/5 axis), laser welding systems, laser marking machines, plasma cutting machines, press brakes, and shearing machines.

                This service enables global suppliers to maintain a strong presence in Saudi Arabia, ensure higher customer satisfaction, and strengthen their brand reputation in the region — without the need for permanent local staff.


              </p>
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                5
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Fast Response & Reliable Support
              </h3>
              <p className="text-[#54545f] text-lg mt-4">

                We know downtime costs money — that’s why our service team is structured for fast action:

                Quick diagnosis

                On-time visits

                Professional repairs

                Transparent reporting

                Follow-up checks

              </p>
            </div>
            <div>
              <div className="bg-[#d9d64038] rounded-full ml-auto p-5 px-7 mb-4 font-bold inline-block">
                6
              </div>
              <h3 className="text-[#1c1c1c] mt-3 text-xl font-bold">
                Spare Parts Availability
              </h3>
              <p className="text-[#54545f] text-lg mt-4">

                We keep essential spare parts in stock to ensure minimal waiting time for repairs.
                Motors, drivers, laser components, lens sets, belts, rails, controllers — all available for fast replacement.

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
