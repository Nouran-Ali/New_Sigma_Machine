import { Experience } from "@/comps/Experience";
import Main from "@/comps/Main";
import Our_products from "@/comps/Our_products";
import Our_services from "@/comps/Our_services";
import Samples from "@/comps/Samples";
import WhatWeOffer from "@/comps/WhatWeOffer";
import Image from "next/image";
import Head from 'next/head';
import Meta from "@/comps/Meta";
import Products_bar from "@/comps/Products_bar";

export default function Home() {
  return (
    <>
      {/* <Meta
        title="CNC Machines | Fiber Laser, CNC Routers, Laser Welders & Industrial Machinery"
        description="Buy high-precision CNC machines including fiber laser cutters, CNC routers (3,4,5 axis), CO2 laser machines, plasma cutters, welding systems, marking machines & sheet metal equipment. High quality & fast delivery."
        keywords="CNC Machines, Fiber Laser Cutting, CNC Router Supplier, Laser Machines, Industrial Machinery"
      /> */}
      <Meta
        title="CNC Machines | Fiber Laser, CNC Routers, Laser Welders & Industrial Machinery"
        description="Buy high-precision CNC machines including fiber laser cutters, CNC routers, CO2 laser machines, welding systems, and industrial machinery with fast delivery across the Middle East."
        keywords="CNC Machines,
    CNC machines Saudi Arabia,
    Laser cutting machines KSA,
    CNC router supplier Saudi Arabia,
    Industrial machinery distributor,
    Fiber laser machines Middle East,
    CNC machines for metal fabrication,
    Laser welding systems for industry
  "
      />

      <div className="sr-only">
        <h1>Professional CNC & Laser Machine Maintenance in Saudi Arabia</h1>

        <h2>Strong After-Sales Support & Expert Engineers</h2>
        <h2>Annual Maintenance Contracts for Factories & Workshops</h2>
        <h2>On-Site External Maintenance Across Saudi Arabia</h2>
        <h2>Local Service Provider for Chinese CNC & Laser Machines</h2>
        <h2>Fast Response, Accurate Diagnosis & Reliable Repair</h2>
        <h2>Spare Parts Availability for All CNC & Laser Systems</h2>

        <h3>CNC Router Service</h3>
        <h3>Fiber Laser Cutting Machine Support</h3>
        <h3>CO₂ Laser Maintenance</h3>
        <h3>Laser Welding System Calibration</h3>
        <h3>Press Brake & Shearing Machine Repair</h3>

      </div>


      <Main />
      <Products_bar />
      <WhatWeOffer />
      <Our_products />
      <Our_services />
      <Experience />
      <Samples />

      <section className="container mx-auto py-10 text-gray-700 sr-only">
        <h2>CNC Machine Maintenance in Saudi Arabia – Who We Serve</h2>
        <p>We provide maintenance services to metal fabrication factories, signage companies, furniture manufacturers, engineering workshops, and industrial facilities.</p>

        <h2>Supported Machine Brands</h2>
        <p>We service Chinese CNC routers, fiber laser machines, hybrid machines, and global CNC brands.</p>

        <h2>Industries We Support</h2>
        <p>Metalworking, woodworking, signage, automotive, engineering, heavy industry.</p>
      </section>

    </>
  );
}
