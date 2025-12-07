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
      <Meta
        title="CNC Machines | Fiber Laser, CNC Routers, Laser Welders & Industrial Machinery"
        description="Buy high-precision CNC machines including fiber laser cutters, CNC routers (3,4,5 axis), CO2 laser machines, plasma cutters, welding systems, marking machines & sheet metal equipment. High quality & fast delivery."
        keywords="CNC Machines, Fiber Laser Cutting, CNC Router Supplier, Laser Machines, Industrial Machinery"
      />

      <Main />
      <Products_bar />
      <WhatWeOffer />
      <Our_products />
      <Our_services />
      <Experience />
      <Samples />
    </>
  );
}
